'use server';

import { unstable_cache } from 'next/cache';
import { Blogs } from '@/data';

const cache = unstable_cache;

// Caching strategy with revalidation
export const getAllBlogs = cache(
  async (options?: { revalidate?: number }) => {
    try {
      // Implement dynamic revalidation
      const _revalidateDuration = options?.revalidate ?? 3600; // 1 hour default

      // Type-safe blog data with minimal structure
      const sanitizedBlogs = Blogs.map((blog) => ({
        id: blog._id,
        title: blog.title,
        slug: blog.slug,
        publishedAt: blog.publishedDate,
        // Only include essential fields
      }));

      return {
        blogs: sanitizedBlogs,
        error: null,
        timestamp: Date.now(),
        count: sanitizedBlogs.length,
      };
    } catch (error) {
      // Advanced error logging
      console.error('Blog Fetch Error:', error);

      return {
        blogs: [],
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        timestamp: Date.now(),
        count: 0,
      };
    }
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
);

// Filtered blog retrieval
export const getBlogsByCategory = cache(async (category: string) => {
  try {
    const filteredBlogs = Blogs.filter(
      (blog) => blog.category.toLowerCase() === category.toLowerCase()
    );

    return {
      blogs: filteredBlogs.map((blog) => ({
        id: blog._id,
        title: blog.title,
        slug: blog.slug,
      })),
      error: null,
      count: filteredBlogs.length,
    };
  } catch (error) {
    console.error(`Category Filter Error for ${category}:`, error);

    return {
      blogs: [],
      error: 'Failed to filter blogs by category',
      count: 0,
    };
  }
});

// Pagination support
export const getBlogsPaginated = cache(
  async (options: { page?: number; limit?: number; category?: string } = {}) => {
    const { page = 1, limit = 10, category } = options;

    try {
      const filteredBlogs = category
        ? Blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase())
        : Blogs;

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedBlogs = filteredBlogs
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
        .slice(startIndex, endIndex);

      return {
        blogs: paginatedBlogs.map((blog) => ({
          id: blog._id,
          title: blog.title,
          slug: blog.slug,
          publishedAt: blog.publishedDate,
        })),
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredBlogs.length / limit),
          totalBlogs: filteredBlogs.length,
          hasNextPage: endIndex < filteredBlogs.length,
          hasPrevPage: page > 1,
        },
        error: null,
      };
    } catch (error) {
      console.error('Paginated Blogs Error:', error);

      return {
        blogs: [],
        pagination: {
          currentPage: page,
          totalPages: 0,
          totalBlogs: 0,
          hasNextPage: false,
          hasPrevPage: false,
        },
        error: 'Failed to retrieve paginated blogs',
      };
    }
  }
);

// Search functionality
export const searchBlogs = cache(async (query: string) => {
  try {
    if (!query || query.trim().length < 2) {
      return {
        blogs: [],
        error: null,
        count: 0,
      };
    }

    const searchResults = Blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.content.toLowerCase().includes(query.toLowerCase())
    );

    return {
      blogs: searchResults.map((blog) => ({
        id: blog._id,
        title: blog.title,
        slug: blog.slug,
        excerpt: `${blog.content.slice(0, 100)}...`,
      })),
      error: null,
      count: searchResults.length,
    };
  } catch (error) {
    console.error('Blog Search Error:', error);

    return {
      blogs: [],
      error: 'Search failed',
      count: 0,
    };
  }
});

export const getUniqueCategories = cache(async () => {
  const categories = Blogs.map((blog) => blog.category);
  return ['All', ...new Set(categories)];
});

export const getBlogBySlug = cache(async (slug: string) => {
  try {
    const blog = Blogs.find((blog) => blog.slug === slug);

    if (!blog) {
      return {
        blog: null,
        error: 'Blog post not found',
        success: false,
      };
    }

    return {
      blog: { ...blog },
      error: null,
      success: true,
    };
  } catch (error) {
    console.error('Blog Fetch Error:', error);

    return {
      blog: null,
      error: 'Failed to fetch blog post',
      success: false,
    };
  }
});

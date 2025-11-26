import type { CollectionConfig, CollectionSlug } from 'payload';
import { isAdmin, isInstructor, canManageCourses } from '@/access/checkRole';

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    description: 'Manage online courses and training materials',
    group: 'Content',
  },
  access: {
    // Public read access
    read: () => true,
    // Admin or instructor can create courses
    create: ({ req: { user } }) => {
      if (!user) return false;
      return canManageCourses(user);
    },
    // Admin can update all, instructors can only update their own courses
    update: ({ req: { user } }) => {
      if (!user) return false;
      // Admins can update all courses
      if (isAdmin(user)) return true;
      // Instructors can only update courses where they are the instructor
      if (isInstructor(user)) {
        return {
          instructor: {
            equals: user.id,
          },
        };
      }
      return false;
    },
    // Admin can delete all, instructors can only delete their own courses
    delete: ({ req: { user } }) => {
      if (!user) return false;
      // Admins can delete all courses
      if (isAdmin(user)) return true;
      // Instructors can only delete courses where they are the instructor
      if (isInstructor(user)) {
        return {
          instructor: {
            equals: user.id,
          },
        };
      }
      return false;
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Course title',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier for the course',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief description of the course',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Detailed course content and curriculum',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Course thumbnail image',
      },
    },
    {
      name: 'courseFiles',
      type: 'array',
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Course material file (PDF, video, etc.)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'File title/name',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'File description',
          },
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Display order of the file',
          },
        },
      ],
      admin: {
        description: 'Course materials and resources',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      required: true,
      admin: {
        description: 'Course category',
      },
    },
    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        description: 'Course instructor',
      },
    },
    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'Course duration (e.g., "8 hours", "4 weeks")',
      },
    },
    {
      name: 'level',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
      ],
      required: true,
      admin: {
        description: 'Course difficulty level',
      },
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Course price (0 for free courses)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        description: 'Course publication status',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as featured course',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'gadgetTags' as CollectionSlug,
      hasMany: true,
      admin: {
        description: 'Course tags for better organization',
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'SEO meta title',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
        },
      ],
      admin: {
        description: 'SEO settings',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Auto-generate slug if not provided
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }

        // Set instructor to current user if not specified
        if (!data.instructor && req.user) {
          data.instructor = req.user.id;
        }

        return data;
      },
    ],
  },
};

import React from 'react';
import { Blogs } from '@/data';
import type { Blog } from '@/types';
import { Button } from './ui/button';
import Link from 'next/link';
import BlogPopularCard from './BlogPopularCard';

export default function BlogHeader() {
    const currentBlog: Blog = Blogs[0];
    const popularBlogs: Blog[] = Blogs.filter((blog: Blog) => blog.popular);

    return (
        <section className='flex flex-col gap-4 sm:gap-6 md:gap-10'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-4 md:gap-0'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>Blog</h1>
                <div className='w-full md:w-[400px]'>
                    <p className='text-sm sm:text-base text-graphite-gray'>The IT Chronicles: Key Resources for Staying Ahead in a Rapidly Evolving Industry</p>
                    <Link className='text-sm sm:text-base text-winny' href='#newsletter'>Subscribe to newsletter</Link>
                </div>
            </div>
            <div className='min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row h-full'>
                <div className='md:w-[70%] p-2 sm:p-4 min-h-[250px] sm:min-h-[300px] md:min-h-[500px]'>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, transparent, black), url(${currentBlog.image})` }}
                        className='h-full w-full object-cover bg-cover rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 justify-end'>
                        <h2 className='text-white text-3xl sm:text-4xl md:text-5xl font-semibold'>{currentBlog.title}</h2>
                        <p className='text-graphite-gray text-sm sm:text-base md:text-xl'>{currentBlog.description}</p>
                        <Link className='w-fit' href={`/blog/${currentBlog.slug}`}>
                            <Button className='bg-white rounded-3xl px-6 sm:px-10 text-sm sm:text-base text-winny hover:bg-winny hover:text-white font-medium'>
                                Read Blog
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-[30%] p-2 sm:p-4 min-h-[250px] sm:min-h-[300px] md:min-h-[500px]'>
                    <h3 className='mb-2 sm:mb-3 text-base sm:text-lg'>Most Popular Blogs</h3>
                    <div className='h-[calc(100%-2rem)] flex flex-col gap-2 sm:gap-3'>
                        {popularBlogs.map((blog) => (
                            <BlogPopularCard key={blog.slug} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react'
import { Blogs } from '@/data'
import BlogCard from './BlogCard'


export default function BlogList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    )
}

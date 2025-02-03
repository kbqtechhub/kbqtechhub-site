import React from 'react'
import BlogFilter from './BlogFilter'
import BlogLlist from './BlogLlist'

export default function BlogContent() {
    return (
        <section className='min-h-screen bg-[#1F1E1E] rounded-b-xl shadow-md p-4 md:p-10'>
            <div className='w-full max-w-6xl mx-auto'>
                <BlogFilter />
                <BlogLlist />
            </div>
        </section>
    )
}

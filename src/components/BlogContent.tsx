import React, { Suspense } from 'react'
import BlogFilter from './BlogFilter'
import BlogLlist from './BlogLlist'
import BlogFilterSkeleton from './ui/BlogFilterSkeleton'

export default function BlogContent() {
    return (
        <section className='min-h-screen bg-[#1F1E1E] rounded-b-xl shadow-md p-4 md:p-10'>
            <div className='w-full max-w-6xl mx-auto'>
                <Suspense fallback={<BlogFilterSkeleton />}>
                    <BlogFilter />
                </Suspense>
                <BlogLlist />
            </div>
        </section>
    )
}

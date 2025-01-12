import Link from 'next/link'
import React from 'react'

export default function BlogHeader() {
    return (
        <section className='flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0'>
                <h1 className='text-4xl md:text-6xl font-bold'>Blog</h1>
                <div className='w-full md:w-[400px]'>
                    <p className='text-graphite-gray'>The IT Chronicles: Key Resources for Staying Ahead in a Rapidly Evolving Industry</p>
                    <Link className='text-winny' href='#newsletter'>Subscribe to newsletter</Link>
                </div>
            </div>
            <div className='min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row h-full'>
                <div className='md:w-[70%] p-4 min-h-[300px] md:min-h-[500px]'>
                    <div className='bg-white h-full w-full rounded-3xl p-6'>
                        <h2>Featured Blog Post</h2>
                    </div>
                </div>
                <div className='md:w-[30%] p-4 min-h-[300px] md:min-h-[500px]'>
                    <h3 className='mb-3'>Most Popular Blogs</h3>
                    <div className='h-[calc(100%-2rem)] flex flex-col gap-3'>
                        <div className='flex-1 min-h-[100px] bg-soft-wine rounded-xl p-4'></div>
                        <div className='flex-1 min-h-[100px] bg-soft-wine rounded-xl p-4'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

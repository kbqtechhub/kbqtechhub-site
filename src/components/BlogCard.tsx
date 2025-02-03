import React from 'react'
import { Blogs } from '@/data'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'

export default function BlogCard({ blog }: { blog: (typeof Blogs)[0] }) {
    return (
        <div className="group bg-[var(--pure-black)] backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[var(--yelly)]/20 hover:scale-[1.02] hover:bg-[var(--soft-black)]">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                {blog.popular && (
                    <span className="absolute top-4 right-4 red_gradient text-[var(--white)] px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                    </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pure-black)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text_gradient bg-clip-text text-transparent px-3 py-1 rounded-full text-sm font-semibold border border-[var(--muted-yelly)]">
                        {blog.category}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--white)] line-clamp-2 group-hover:text-[var(--yelly)] transition-colors">
                    {blog.title}
                </h3>
                <p className="text-[var(--graphite-gray)] line-clamp-3 mb-4 text-sm">
                    {blog.description}
                </p>
                <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--yelly)] font-medium hover:text-[var(--winny)] hover:gap-4 transition-all duration-300"
                >
                    <span>Read More</span>
                    <FaArrowRight className="text-sm" />
                </Link>
            </div>
        </div>
    )
}

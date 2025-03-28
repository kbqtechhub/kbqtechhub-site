import React from 'react'
import BlogContent from '@/components/BlogContent'
import BlogHeader from '@/components/BlogHeader'
import NewsletterForm from '@/components/NewsletterForm'

export default function BlogPage() {
    return (
        <section className='flex flex-col gap-20 mb-20'>
            <BlogHeader />
            <BlogContent />
            <NewsletterForm />
        </section>
    )
}

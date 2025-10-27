import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { getBlogBySlug } from '@/actions';
import BlogComments from '@/components/BlogComments';
import SingleBlogCard from '@/components/SingleBlogCard';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const response = await getBlogBySlug(slug);

  return (
    <section className="max-w-3xl mx-auto w-full">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-[var(--muted-yelly)] hover:text-[var(--yelly)] mb-6 transition-colors group"
      >
        <IoArrowBack className="text-xl group-hover:scale-110 transition-transform" />
        <span className="font-medium">Back to Blog</span>
      </Link>
      <SingleBlogCard blog={response.blog} />
      <BlogComments comments={response.blog?.comments} />
    </section>
  );
}

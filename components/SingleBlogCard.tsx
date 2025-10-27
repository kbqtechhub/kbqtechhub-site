import Image from 'next/image';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import type { BlogPost } from '@/types';

interface Props {
  blog?: BlogPost | null | { _id: string; [key: string]: any };
}

export default function SingleBlogCard({ blog }: Props) {
  if (!blog) return null;

  return (
    <section className="w-full bg-off-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Blog Header */}
      <div className="blog-header">
        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] bg-pure-black bg-opacity-20">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>

        {/* Blog Meta Information */}
        <div className="p-6 space-y-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <h3 className="text-white font-medium">{blog.author}</h3>
          </div>

          {/* Category and Read Time */}
          <div className="flex items-center gap-4">
            <span className="text_gradient bg-clip-text text-transparent px-3 py-1 rounded-full text-sm font-semibold border border-muted-yelly">
              {blog.category}
            </span>
            <span className="text-graphite-gray text-base">{blog.readTime}</span>
          </div>

          {/* Title and Description */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold line-clamp-2 text-white">{blog.title}</h2>
            <p className="text-graphite-gray text-base line-clamp-3">{blog.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-pure-black text-soft-yelly border border-muted-yelly hover:bg-soft-black transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Engagement Metrics */}
          <div className="flex items-center justify-between text-base pt-2">
            <span className="text-graphite-gray">{blog.publishedDate}</span>
            <div className="flex items-center gap-3">
              {/* Views */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pure-black hover:bg-off-black transition-colors">
                <IoEyeOutline className="text-lg text-yelly" />
                <span className="text-white">{blog.views}</span>
              </div>
              {/* Likes */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pure-black hover:bg-off-black transition-colors">
                <FaRegHeart className="text-lg text-winny" />
                <span className="text-white">{blog.likes}</span>
              </div>
              {/* Comments */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pure-black hover:bg-off-black transition-colors">
                <FaRegComment className="text-lg text-soft-yelly" />
                <span className="text-white">{blog.comments.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="border-t border-dark-gray">
        <article className="p-6">
          <p className="text-white text-base leading-loose whitespace-pre-wrap">{blog.content}</p>
        </article>
      </div>
    </section>
  );
}

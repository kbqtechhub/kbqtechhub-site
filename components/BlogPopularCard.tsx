import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/types';

interface BlogPopularCardProps {
  blog: Blog;
}

export default function BlogPopularCard({ blog }: BlogPopularCardProps) {
  return (
    <div className="flex-1 min-h-[150px] sm:min-h-[100px] bg-darker-gray rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-1.5">
      <div className="w-full h-32 sm:h-24 md:h-32 relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="rounded-xl object-cover bg-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-1">
        <h4 className="text-sm sm:text-base text-winny font-semibold">{blog.title}</h4>
        <p className="text-xs sm:text-sm text-graphite-gray line-clamp-2">{blog.description}</p>
      </div>
      <div>
        <Link className="text-white text-xs sm:text-sm underline" href={`/blog/${blog.slug}`}>
          Read Blog
        </Link>
      </div>
    </div>
  );
}

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: {
    _slug: string;
    banner_image: { url?: string };
    id?: number;
    title: string;
  };
}
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      {post.banner_image.url && (
        <div className="relative h-48">
          <Image
            src={post.banner_image.url}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="size-full object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>

        <Link href={`/blog/${post._slug}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;

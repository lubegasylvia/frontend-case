import { notFound } from 'next/navigation';

import parse from 'html-react-parser';

import BannerImage from '@/components/banner-image';
import { PreprSdk } from '@/server/prepr';
import type { PreprText } from '@/server/prepr/generated/preprAPI.schema';
import BlogCard from '@/components/blog-card';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}
// FC in full React functional component(the arrow function)
// async waiting for PreprSdk the server to respond
// PreprSdk is just like wordpress cms where teh contet is store
const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
  const { slug } = params;
  if (!slug) return notFound();

  const { Blog } = await PreprSdk.BlogDetail({
    slug,
  });

  if (!Blog) {
    return notFound();
  }

  const content = parse(
    Blog.content?.map((content) => (content as PreprText).html ?? '').join('') ?? '',
  );
  return (
    <div className="container mx-auto min-h-screen">
    <BannerImage image={Blog.banner_image} />

      <div className="container grid-cols-12">
        <article className="mx-auto w-4/5 p-10">
          {Blog.categories.map((category) => (
            <span key={category._id} className="rounded-[4px]">
              {category.body}
            </span>
          ))}

          <h1 className="text-3xl font-bold lg:text-5xl"> {Blog.title}</h1>

          {content}
        </article> 
      </div>

      <div className="p-20">
        {/* <h2 className="text-3xl font-bold lg:text-5xl pb-6">The latest blogposts</h2> */}

        <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
        {Blog.related_blogs.map((post) => <BlogCard key={post._id} post={post} />)}
      </div>
      </div>
    </div>
  );
};

export default BlogDetail;

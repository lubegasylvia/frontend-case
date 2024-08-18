
import BannerHome from '@/components/banner-home';
import BlogCard from '@/components/blog-card';
;
import { PreprSdk } from '@/server/prepr';


export default async function Home() {
  const { Page } = await PreprSdk.Page({ slug: '/' });

  const { Blogs } = await PreprSdk.LatestBlogs();

  return (
    <main className="container mx-auto">
      {Page?.page_header && <BannerHome banner={Page.page_header} />}

      <div className="p-20">
        <h2 className="text-3xl font-bold lg:text-5xl pb-6">The latest blogposts</h2>

        <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
        {Blogs?.items.map((post) => <BlogCard key={post._id} post={post} />)}
      </div>
      </div>

      
    </main>
  );
}

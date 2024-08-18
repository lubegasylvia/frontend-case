import React from 'react';
import BannerHome from '@/components/banner-home';
import BlogCard from '@/components/blog-card';
import { PreprSdk } from '@/server/prepr';


export default async function Blog() {
  const { Blogs} = await PreprSdk.Blogs();
  const { Page } = await PreprSdk.Page({slug:'blog'});


  return (
    <main className="container mx-auto">
      {Page?.page_header && <BannerHome height='small' banner={Page.page_header} />}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  p-16">
        {Blogs?.items.map((post) => <BlogCard key={post._id} post={post} />)}
      </div>
    </main>
  );
}

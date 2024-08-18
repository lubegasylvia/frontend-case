import React from 'react';


interface BannerHomeProps {
  banner:{
    image?: {
      url?: string;
    };
    title:string;
    text:string;
  }

  height: string;
 
}

const BannerHome: React.FC<BannerHomeProps> = ({ banner, height}) => {
  return (
      
     <section
     className={ height === 'small' ? "relative h-[300px] bg-cover bg-center": "relative h-[601px] bg-cover bg-center"}
     style={{ backgroundImage: `url('${banner.image?.url}')` }}>
     <div className="absolute inset-0 bg-black opacity-50"></div> 

     <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center text-white">
       <h1 className="mb-4 text-4xl font-bold md:text-6xl">{banner.title} </h1>

       <p className="max-w-2xl text-lg md:text-2xl">{banner.text} </p>
     </div>
   </section>
  );
};
export default BannerHome;

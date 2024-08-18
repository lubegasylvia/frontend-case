import React from 'react';

import Image from 'next/image';

interface BannerImageProps {
  image: {
    url?: string;
    name?: string;
    alignment?: string;
  };
}

const BannerImage: React.FC<BannerImageProps> = ({ image }) => {
  return (
    <>
      {image.url && (
        <div className="relative h-[452px] bg-cover bg-center">
          <Image
            src={image.url}
            alt={image.name || 'Banner'}
            fill
            className="z-0 object-cover"
            style={{
              objectPosition: image.alignment,
            }}
          />
        </div>
      )}
    </>
  );
};
export default BannerImage;

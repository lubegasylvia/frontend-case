import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { PreprSdk } from '@/server/prepr';

import NavigationMenu from './navigation';



const Header = async () => {
   const { Navigation } = await PreprSdk.Navigation({ slug: 'header' });

  return (
    <header className="container mx-auto header-bg-gradient">
      <div className="mx-auto w-4/5 p-5 flex items-center justify-between ">
        <Link href="/">
          <Image
            src='/logo-transparent.png'
            loading="eager"
            priority
            alt={'logo'}
            width={210}
            height={32}
          />
        </Link>

        {Navigation?.items && <NavigationMenu items={Navigation.items} /> }

      </div>
    </header>
  );
};

export default Header;

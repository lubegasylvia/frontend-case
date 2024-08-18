import React from 'react';

import { PreprSdk } from '@/server/prepr';
import FooterMenu from './footer-menu';


const Footer = async () => {
   const { Navigation } = await PreprSdk.Navigation({ slug: 'footer' });

  return (
    <header className="container mx-auto header-bg-gradient">
      <div className="mx-auto w-4/5 p-5 flex items-center justify-between ">
       

        {Navigation?.items && <FooterMenu items={Navigation.items} /> }

      </div>
    </header>
  );
};

export default Footer;

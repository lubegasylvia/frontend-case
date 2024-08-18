import React from "react";
import Link from "next/link";
import type { PreprPage } from "@/server/prepr/generated/preprAPI.schema";


interface FooterMenuProps {
  items:NavItem[];
}

interface NavItem{
  link_to_page: Array<PreprPage>;
  _slug:string;
  title: string;
}

const FooterMenu:React.FC<FooterMenuProps>=({items})=> {
  

  return (
    <nav>
      <ul className="flex space-x-4">
        {items.map((menuItem) => (
          <li key={menuItem._slug}>
            <Link href={`/${menuItem.link_to_page[0]?._slug}`} className="text-white hover:underline">
              {menuItem.title}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterMenu;

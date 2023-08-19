import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface subMenus {
  href: string;
  key: string;
  title: string;
}

interface Props {
  href?: string;
  title: string;
  subMenus?: subMenus[];
}

export default function NavigationMenuMobile({ href, title, subMenus }: Props) {
  return (
    <>
      {!subMenus ? (
        <Link href={href!} className="flex items-center">
          <div className="hover:text-yellow-300 focus:text-yellow-300 transition-all duration-300 w-full border-b-2 p-2">
            {title}
          </div>
        </Link>
      ) : (
        <div>
          <div className="peer group hover:text-yellow-300 focus:text-yellow-300 transition-all duration-300 flex items-center justify-between w-full border-b-2 p-2">
            {title}
            <FiChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
          </div>
          <div className="peer-hover:block hidden hover:block w-full bg-white pl-4 last:border-b-2 overflow-hidden text-green-900 ">
            {subMenus.map((subMenu) => (
              <Link key={subMenu.key} href={subMenu.href}>
                <div className="p-3 hover:text-yellow-300 transition-colors duration-200">
                  {subMenu.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

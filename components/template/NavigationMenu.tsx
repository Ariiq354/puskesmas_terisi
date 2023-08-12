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

export default function NavigationMenu({ href, title, subMenus }: Props) {
  return (
    <>
      {!subMenus ? (
        <Link href={href!} className="flex items-center">
          <div className="hover:text-blue-400 transition-all duration-300">
            {title}
          </div>
        </Link>
      ) : (
        <div className="group hover:text-blue-400 transition-all duration-300 flex items-center gap-1 relative">
          {title}
          <FiChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
          <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute top-[3.75rem] w-56 bg-white rounded-md overflow-hidden shadow-md text-black ">
            {subMenus.map((subMenu) => (
              <Link key={subMenu.key} href={subMenu.href}>
                <div className="p-3 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-200">
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

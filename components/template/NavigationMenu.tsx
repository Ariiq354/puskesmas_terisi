import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      {!subMenus ? (
        <Link href={href!} className="flex items-center">
          <div className="hover:text-blue-400 transition-all duration-300">
            {title}
          </div>
        </Link>
      ) : (
        <div
          className="group hover:text-blue-400 transition-all duration-300 flex items-center gap-1 relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {title}
          <FiChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="group-hover:block hidden absolute top-[3.75rem] w-56 bg-white rounded-md overflow-hidden shadow-md text-black "
          >
            {subMenus.map((subMenu) => (
              <Link key={subMenu.key} href={subMenu.href}>
                <div className="p-3 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-200">
                  {subMenu.title}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
}

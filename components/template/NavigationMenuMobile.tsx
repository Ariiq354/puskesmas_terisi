import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { SheetClose } from "../ui/sheet";

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
        <SheetClose asChild>
          <Link href={href!} className="flex items-center">
            <div className="w-full border-b py-4">{title}</div>
          </Link>
        </SheetClose>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{title}</AccordionTrigger>
            {subMenus.map((subMenu) => (
              <Link key={subMenu.key} href={subMenu.href}>
                <AccordionContent>
                  <SheetClose>{subMenu.title}</SheetClose>
                </AccordionContent>
              </Link>
            ))}
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}

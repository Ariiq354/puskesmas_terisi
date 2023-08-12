"use client";

import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NavLinks } from "@/constant";
import NavigationMenu from "./NavigationMenu";
import NavigationMenuMobile from "./NavigationMenuMobile";
import "./style.css";

export default function Navbar() {
  const nav = useRef<HTMLDivElement | null>(null);
  const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
      nav.current?.classList.add("active");
      nav.current?.classList.remove("hidden");
    } else {
      nav.current?.classList.remove("active");
      nav.current?.classList.add("hidden");
    }
  };

  window.addEventListener("scroll", activeElementOnScroll);

  return (
    <div className="bg-teal-800">
      <div
        ref={nav}
        className="py-6 hidden text-white font-bold tracking-widest z-10"
      >
        <div className="flex container">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <div className="w-full items-center justify-center lg:flex hidden">
            <div className="flex gap-12 text-md items h-full">
              {NavLinks.map((link) =>
                link.subMenus ? (
                  <NavigationMenu
                    key={link.key}
                    title={link.title}
                    href={link.href}
                    subMenus={link.subMenus}
                  />
                ) : (
                  <NavigationMenu
                    key={link.key}
                    title={link.title}
                    href={link.href}
                  />
                )
              )}
            </div>
          </div>
          <div className="w-full items-center justify-end lg:hidden flex">
            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                {NavLinks.map((link) =>
                  link.subMenus ? (
                    <NavigationMenuMobile
                      key={link.key}
                      title={link.title}
                      href={link.href}
                      subMenus={link.subMenus}
                    />
                  ) : (
                    <NavigationMenuMobile
                      key={link.key}
                      title={link.title}
                      href={link.href}
                    />
                  )
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="py-6 text-white font-bold tracking-widest">
        <div className="flex container">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <div className="w-full items-center justify-center lg:flex hidden">
            <div className="flex gap-12 text-md items h-full">
              {NavLinks.map((link) =>
                link.subMenus ? (
                  <NavigationMenu
                    key={link.key}
                    title={link.title}
                    href={link.href}
                    subMenus={link.subMenus}
                  />
                ) : (
                  <NavigationMenu
                    key={link.key}
                    title={link.title}
                    href={link.href}
                  />
                )
              )}
            </div>
          </div>
          <div className="w-full items-center justify-end lg:hidden flex">
            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                {NavLinks.map((link) =>
                  link.subMenus ? (
                    <NavigationMenuMobile
                      key={link.key}
                      title={link.title}
                      href={link.href}
                      subMenus={link.subMenus}
                    />
                  ) : (
                    <NavigationMenuMobile
                      key={link.key}
                      title={link.title}
                      href={link.href}
                    />
                  )
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

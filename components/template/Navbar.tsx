"use client";

import React from "react";

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

export default function Navbar() {
  return (
    <>
      <div className="container py-2 md:flex justify-between border-b-2 hidden">
        <div className="flex gap-2 items-center">
          <FaLocationDot /> Jln. Raya Rajasinga, Terisi
          <AiOutlineMail className="ml-2" /> puskesmas_terisi@yahoo.com
        </div>
        <div className="flex gap-6">
          <Link href="https://www.facebook.com/Gesit351" target="_blank">
            <BsFacebook size={20} color="#3b5998" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCpn_z6J4N-XLwM3cjCgEjyQ"
            target="_blank"
          >
            <BsYoutube size={20} color="#c4302b" />
          </Link>
        </div>
      </div>
      <div className="sticky top-0 py-6 shadow-lg bg-white">
        <div className="container flex">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <div className="w-full items-center justify-center md:flex hidden">
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
          <div className="w-full items-center justify-end md:hidden flex">
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
    </>
  );
}

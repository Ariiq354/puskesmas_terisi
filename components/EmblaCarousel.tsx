'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
    loop: true,
    align: 'start',
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    active: true
  },
    [Autoplay()]
  )

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Link
            href={"https://indramayukab.go.id/"}
            target="_blank"
            rel="nofollow noopner">
              <Image
                src="/logoIndramayu.png"
                alt=""
                // className="embla__slide__img"
                className=""
                width={100}
                height={100}/>
          </Link>
        </div>
        <div className="embla__slide">
          <Link
            href={"https://jabarprov.go.id/"}
            target="_blank"
            rel="nofollow noopner"
            >
            <Image
            src="/logoJabar.png"
            alt=""
            // className="embla__slide__img"
            className=""
            width={100}
            height={100}
            />
          </Link>
        </div>
        <div className="embla__slide">
          <Link
            href={"https://www.kemkes.go.id/"}
            target="_blank"
            rel="nofollow noopner"
            >
            <Image
            src="/logoKemenkes.png"
            alt=""
            // className="embla__slide__img"
            className=""
            width={100}
            height={100}
            />
          </Link>
        </div>
        <div className="embla__slide">
          <Link
            href={"/"}
            target="_blank"
            rel="nofollow noopner"
            >
            <Image
            src="/logoPkm.png"
            alt=""
            // className="embla__slide__img"
            className=""
            width={100}
            height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

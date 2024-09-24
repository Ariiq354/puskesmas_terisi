import Image from "next/image";
import Link from "next/link";
import { EmblaCarousel } from "./EmblaCarousel";

const Banner = () => {
  return (
    <div className="text-5xl bg-emerald-100">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-start-3 col-span-8">
          <EmblaCarousel />
        </div>
      </div>
      {/* <EmblaCarousel /> */}
      {/* <div className="flex flex-wrap">
        <div className="mx-4 w-full">
          <div className="w">
            <div className="flex flex-row gap-12 items-center justify-center overflow-hidden">
            <div className="splide" aria-label="Splide Basic HTML Example">
              <div className="splide__track">
		            <ul className="splide__list">
			            <li className="splide__slide">
                  <Image
                    src="/logoIndramayu.webp"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                  </li>
			            <li className="splide__slide">
                  <Image
                    src="/logoIndramayu.webp"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                  </li>
			            <li className="splide__slide">
                  <Image
                    src="/logoIndramayu.webp"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                  </li>
		            </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;

// import Image from "next/image";
// import Link from "next/link";
// import styles from "./Banner.module.css";

// const Banner = () => {
//   return (
//     <div className='text-5xl bg-emerald-100'>
//       <div className={`flex flex-wrap bg-black ${styles.banner}`} >
//         <div className={`flex-wrap gap-12 items-center justify-center bg-blue-400 ${styles.logoWrapper}`}>
//           <div className={`mr-10 my-5 max-w-[140px] bg-red-400 ${styles.logo}`}>
//             <Link
//             href={"https://indramayukab.go.id/"}
//             target="_blank"
//             rel="nofollow noopner"
//             >
//               <Image
//               src="/logoIndramayu.webp"
//               alt=""
//               className=""
//               width={100}
//               height={100}
//               />
//             </Link>
//           </div>
//           <div className={`mr-0 md:my-10 my-5 max-w-[140px] bg-red-400 ${styles.logo}`}>
//             <Link
//             href={"https://jabarprov.go.id/"}
//             target="_blank"
//             rel="nofollow noopner"
//             >
//               <Image
//               src="/logoJabar.webp"
//               alt=""
//               className=""
//               width={100}
//               height={100}
//               />
//             </Link>
//           </div>
//           <div className={`mr-10 my-5 max-w-[140px] bg-red-400 ${styles.logo}`}>
//             <Link
//             href={"https://www.kemkes.go.id/"}
//             target="_blank"
//             rel="nofollow noopner"
//             >
//               <Image
//               src="/logoKemenkes.webp"
//               alt=""
//               className=""
//               width={100}
//               height={100}
//               />
//             </Link>
//           </div>
//           <div className={`mr-0 md:my-5 max-w-[140px] bg-red-400 ${styles.logo}`}>
//             <Link
//             href={"/"}
//             target="_blank"
//             rel="nofollow noopner"
//             >
//               <Image
//               src="/logoPkm.webp"
//               alt=""
//               className=""
//               width={100}
//               height={100}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

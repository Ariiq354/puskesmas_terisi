import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="text-5xl bg-emerald-100">
      <div className="flex flex-wrap">
        <div className="mx-4 w-full">
          <div className="w">
            <div className="flex flex-wrap gap-12 items-center justify-center">
              <div className="mr-10 my-5 max-w-[140px]">
                <Link
                  href={"https://indramayukab.go.id/"}
                  target="_blank"
                  rel="nofollow noopner"
                >
                  <Image
                    src="/logoIndramayu.png"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="mr-0 md:mr-10 my-5 max-w-[140px]">
                <Link
                  href={"https://jabarprov.go.id/"}
                  target="_blank"
                  rel="nofollow noopner"
                >
                  <Image
                    src="/logoJabar.png"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="mr-10 my-5 max-w-[140px]">
                <Link
                  href={"https://www.kemkes.go.id/"}
                  target="_blank"
                  rel="nofollow noopner"
                >
                  <Image
                    src="/logoKemenkes.png"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="mr-0 md:mr-10 my-5 max-w-[140px]">
                <Link href={"/"} target="_blank" rel="nofollow noopner">
                  <Image
                    src="/logo.png"
                    alt=""
                    className=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

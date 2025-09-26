import RootLayout from "@/layouts/RootLayout";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import MyImage from "../../public/next.svg";
import clsx from "clsx";

export default function Slots() {
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <div className="w-full h-full flex flex-col p-[16px] bg-amber-500">
      {/* <div className="w-[1280px] h-[450px]">Banner</div> */}
      {/* <div className="flex">
        <button className="">左</button>
        <div className="flex">Providers</div>
        <button className="">右</button>
      </div> */}
      {/* <div className="w-[335px] h-[50px]">
        Input and Search
      </div> */}

      <div className="w-full flex flex-wrap gap-[8px]">
        {Array.from({ length: 24 }).map((_, idx) => (
          <div
            key={idx}
            className={clsx(
              "aspect-[128/128] bg-amber-50",
              !matches ? "w-[calc(100%/3-7px)]" : "w-[calc(100%/8-7px)]"
            )}
          >
            <Image src={MyImage} alt="myImage" />
          </div>
        ))}
      </div>

      {/* <div>Pagination</div> */}
    </div>
  );
}

Slots.getLayout = RootLayout;

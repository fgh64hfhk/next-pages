import QQLayout from "@/layouts/QQLayout";
import Slot from "@/components/Slot";

import clsx from "clsx";

import { useEffect, useRef, useState } from "react";

export default function Lottery_2() {
  const [pageData, setPageData] = useState({});

  const bannerWidthRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState(0);

  useEffect(() => {
    if (!bannerWidthRef) return;

    const handleResize = () => {
      // 確保 current 存在
      if (bannerWidthRef.current) {
        setBannerWidth(bannerWidthRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center">
      <div
        ref={bannerWidthRef}
        className={clsx(
          "w-full aspect-auto md:aspect-video rounded-xl bg-amber-50",
          "flex justify-center items-center"
        )}
      >
        {bannerWidth > 0 && <Slot parentWidth={bannerWidth} />}
      </div>
    </div>
  );
}

Lottery_2.getLayout = QQLayout;

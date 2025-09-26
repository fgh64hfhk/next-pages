import Image from "next/image";
import MyImage from "@/public/next.svg";
import RootLayout from "@/layouts/RootLayout";
import React, { useState, useRef } from "react";
import clsx from "clsx";

export default function Carousel({
  imageLength = 8,
  visibleLength = 5,
  gapPx = 8,
}) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, imageLength - visibleLength);
  
  const isPrevEnabled = index > 0;
  const isNextEnabled = index < maxIndex;
  
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const ref = carouselRef.current;

    const containerWidth = ref.clientWidth;
    const cardWidth = containerWidth / visibleLength - (gapPx * (visibleLength - 1)) / visibleLength;
    const step = cardWidth + gapPx;

    ref.scrollLeft += direction * step;

    if (direction > 0) {
      const nextIndex = Math.min(maxIndex, index + 1);
      setIndex(nextIndex);
    } else {
      const nextIndex = Math.max(0, index - 1);
      setIndex(nextIndex);
    }
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col p-[16px] bg-amber-500">
      <div className="w-full relative">
        <button
          className={clsx(
            "w-[30px] h-[30px] rounded-xl cursor-pointer bg-red-500 text-white flex justify-center items-center",
            "absolute left-[20px] top-[50%] translate-y-[-50%]",
            isPrevEnabled ? "block" : "hidden"
          )}
          onClick={() => scrollCarousel(-1)}
          disabled={!isPrevEnabled}
        >
          左
        </button>
        <div
          ref={carouselRef}
          className="w-full flex overflow-x-scroll overflow-y-hidden scroll-smooth snap-x"
          style={{
            columnGap: `${gapPx}px`
          }}
        >
          {Array.from({ length: imageLength }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[128/128] bg-amber-50 shrink-0 overflow-hidden rounded-xl snap-center"
              style={{
                width: `calc(100% / ${visibleLength} - ${ (gapPx * (visibleLength - 1)) / visibleLength }px)`,
              }}
            >
              <Image
                src={MyImage}
                alt={`image-${idx + 1}`}
                className="w-full h-full"
                priority
              />
            </div>
          ))}
        </div>
        <button
          className={clsx(
            "w-[30px] h-[30px] rounded-xl cursor-pointer bg-red-500 text-white flex justify-center items-center",
            "absolute right-[20px] top-[50%] translate-y-[-50%]",
            isNextEnabled ? "block" : "hidden"
          )}
          onClick={() => scrollCarousel(1)}
          disabled={!isNextEnabled}
        >
          右
        </button>
      </div>
    </div>
  );
}

Carousel.getLayout = RootLayout;

import QQLayout from "@/layouts/QQLayout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function carousel_2() {

  return (
    <div className="w-full flex flex-col gap-y-4 bg-[#073926]">
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-bold text-white">Title</h1>
          <div className="flex items-center gap-2">
            <button className="w-[30px] h-[30px] flex justify-center items-center bg-[#092f22] border-[#18543f] rounded-sm">
              <ChevronLeft stroke="#ffffff" />
            </button>
            <button className="w-[30px] h-[30px] flex justify-center items-center bg-[#092f22] border-[#18543f] rounded-sm">
              <ChevronRight stroke="#ffffff" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-2.5">
          <div className="w-[30%]">
            <div className="w-full relative aspect-square">
              <Image
                className="object-cover"
                src="https://placehold.co/600x400"
                alt="img"
                fill
                unoptimized
                priority
              />
            </div>
          </div>
          <div className="w-[70%] flex overflow-y-scroll hidden-scrollbar">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="w-full shrink-0 border bg-amber-400">
                <div className="w-full h-full flex flex-wrap gap-2.5">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 relative aspect-square"
                      style={{ width: `calc((100% - 4 * 10px) / 5)` }}
                    >
                      <Image
                        className="object-cover"
                        src="https://placehold.co/600x400"
                        alt="img"
                        fill
                        unoptimized
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

carousel_2.getLayout = QQLayout;

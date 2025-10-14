import RootLayout from "@/layouts/RootLayout";
import Image from "next/image";

export default function ImageTest() {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div key={idx} className="shrink-0 w-[calc((100%-(5-1)*8px)/5)]">
          <div className="w-full h-full">
            <div className="bg-amber-950 aspect-[128/128] rounded relative p-2">
              <div className="bg-amber-50 absolute w-[calc(100%-8px)] h-[calc(100%-8px)] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <Image
                  className="object-cover"
                  src="https://placehold.co/600x400.png"
                  alt="img"
                  fill
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ImageTest.getLayout = RootLayout;

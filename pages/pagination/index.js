import QQLayout from "@/layouts/QQLayout";
import Pagination from "./pagination";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Index() {
  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 10,
  });
  const scrollRef = useRef();
  const currentPageRef = useRef(1);

  useEffect(() => {
    if (!scrollRef.current || !currentPageRef.current) return;

    const s = scrollRef.current;
    const prevPage = currentPageRef.current;
    const newPage = pageData.currentPage;

    if (prevPage !== newPage) {
      console.log("useEffect triggered", prevPage, "→", newPage);

      const num = newPage - prevPage;

      s.scrollTo({
        left: s.scrollLeft + num * s.clientWidth,
        behavior: "smooth",
      });

      currentPageRef.current = newPage;
    }
  }, [pageData.currentPage]);

  return (
    <div className="w-full flex flex-col gap-y-4 bg-[#073926]">
      <h1 className="text-2xl text-white font-bold">Pagination</h1>
      <div className="w-full flex gap-2.5">
        <div className="w-[30%] aspect-square relative">
          <Image
            className="object-cover"
            src="https://placehold.co/600x400"
            alt="img"
            fill
            priority
            unoptimized
          />
        </div>
        <div ref={scrollRef} className="w-[70%] flex overflow-x-scroll">
          {Array.from({ length: 10 }).map((_, idx_outer) => (
            <div key={idx_outer} className="w-full shrink-0">
              <div className="w-full h-full flex flex-wrap gap-2.5">
                {Array.from({ length: 10 }).map((_, idx_inner) => (
                  <div
                    key={idx_inner}
                    className="w-[calc((100%-4*10px)/5)] aspect-square relative bg-amber-100"
                  >
                    {idx_outer * 10 + (idx_inner + 1)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={pageData.currentPage}
        totalPages={pageData.totalPages}
        onPageChange={setPageData}
      />
    </div>
  );
}

Index.getLayout = QQLayout;

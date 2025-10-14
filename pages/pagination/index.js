import QQLayout from "@/layouts/QQLayout";
import Pagination from "./pagination";
import { useState } from "react";
import Image from "next/image";

export default function Index() {
  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 10,
  });
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
        <div className="w-[70%] flex">
          {Array.from({length: 5}).map((_,idx) => (
            <div key={idx} className=""></div>
          ))}
          <div className="w-full flex flex-wrap gap-4">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="w-[calc((100%-4*16px)/5)] aspect-square relative bg-amber-100">{idx}</div>
            ))}
          </div>
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

import QQLayout from "@/layouts/QQLayout";
import Pagination from "./pagination";
import { useState } from "react";

export default function Index() {
  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 10,
  });
  return (
    <div className="w-full flex flex-col gap-y-4 bg-[#073926]">
      <h1 className="text-2xl text-white font-bold">Pagination</h1>
      <Pagination
        currentPage={pageData.currentPage}
        totalPages={pageData.totalPages}
        onPageChange={setPageData}
      />
    </div>
  );
}

Index.getLayout = QQLayout;

import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { ListIndentIncrease, ListIndentDecrease } from "lucide-react";
import clsx from "clsx";

export default function ShoppingCart() {
  const isLessThan768 = useMediaQuery("(max-width: 768px)");
  const [pageData, setPageData] = useState({
    isSidebarOpen: false,
  });

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 shrink-0 sticky top-0 transition-all duration-300 bg-[#092F22]",
        pageData.isSidebarOpen
          ? "w-[224px] items-start px-5"
          : "w-[64px] items-center"
      )}
    >
      <button
        className="h-[70px] text-white"
        onClick={() =>
          setPageData((prev) => ({
            ...prev,
            isSidebarOpen: !prev.isSidebarOpen,
          }))
        }
      >
        {pageData.isSidebarOpen ? (
          <ListIndentIncrease />
        ) : (
          <ListIndentDecrease />
        )}
      </button>
    </div>
  );
}

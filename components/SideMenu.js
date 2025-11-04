import { useState } from "react";
import { ListIndentIncrease, ListIndentDecrease } from "lucide-react";
import clsx from "clsx";

export default function SideMenu() {
  const [pageData, setPageData] = useState({
    isSidebarOpen: false,
  });

  return (
    <div
      className={clsx(
        "hidden md:flex md:flex-col gap-5 shrink-0 sticky top-0 bg-[#092F22]",
        "transition-all duration-300",
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
          <ListIndentDecrease />
        ) : (
          <ListIndentIncrease />
        )}
      </button>
    </div>
  );
}

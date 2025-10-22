import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { House, ListIndentIncrease, ListIndentDecrease } from "lucide-react";

import HomeSVG from '@/assets/qq/icons/home.svg'

import clsx from "clsx";

export default function SideMenu() {
  const isLessThan768 = useMediaQuery("(max-width: 768px)");
  const [pageData, setPageData] = useState({
    isSidebarOpen: true,
  });

  const menus = [
    {
      icon: <House />
    }
  ]

  return (
    <div
      className={clsx(
        "h-[100dvh] flex flex-col gap-5 shrink-0 sticky top-0 transition-all duration-300 bg-[#092F22]",
        !isLessThan768 &&
          pageData.isSidebarOpen &&
          "w-[224px] items-start px-5",
        !isLessThan768 && !pageData.isSidebarOpen && "w-[64px] items-center"
      )}
    >
      <button
        className="h-[70px]"
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

      <aside className="h-[70px]">
        <button class="flex items-center justify-center gap-[12px]">
          <svg viewBox="0 0 30 30" class="w-[24px] h-[24px] fill-[#9BC9B0]">
            <path
              fill-rule="evenodd"
              d="M13.94.44a1.5 1.5 0 0 1 2.12 0l13.5 13.5a1.5 1.5 0 0 1-2.12 2.12l-.44-.439V28.5a1.5 1.5 0 0 1-1.5 1.5H18a1.5 1.5 0 0 1-1.5-1.5v-6h-3v6A1.5 1.5 0 0 1 12 30H4.5A1.5 1.5 0 0 1 3 28.5V15.621l-.44.44a1.5 1.5 0 0 1-2.12-2.122z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-[14px] text-[#9BC9B0]">Home</span>
        </button>
      </aside>
    </div>
  );
}

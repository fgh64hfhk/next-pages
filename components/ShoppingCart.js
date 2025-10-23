import { useState } from "react";
import { ListIndentIncrease, ListIndentDecrease } from "lucide-react";

export default function ShoppingCart() {
  const [pageData, setPageData] = useState({
    isSidebarOpen: true,
  });
  return (
    <div className="w-[224px] h-[100dvh] flex flex-col gap-5 shrink-0 sticky top-0 transition-all duration-300 bg-[#092F22] text-white">
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
      <div>shopping cart</div>
    </div>
  );
}

import clsx from "clsx";
import { useState } from "react";

export default function QQLayout(page) {
  const [pageData, setPageData] = useState({
    isSidebarOpen: false,
  });
  return (
    <main className="w-full">
      <div className="w-full flex">
        <div
          className={clsx(
            "w-[50%] h-[100dvh] flex flex-col gap-5 sticky top-0 bg-amber-200",
            !pageData.isSidebarOpen && "hidden"
          )}
        >
          <button className="h-[70px] bg-amber-300">Btn</button>
          <aside className="h-[70px] bg-amber-300">aside</aside>
        </div>

        <div className="w-full h-full flex flex-col">
          <header className="w-full flex justify-center items-center h-[70px] sticky top-0 shrink-0 z-10 bg-[#092F22]">
            header
          </header>
          <div className="w-full flex justify-center items-center h-[70px] sticky top-[70px] shrink-0 z-10 bg-[#073926]">
            navigation
          </div>
          <div className="w-full flex grow bg-[#073926]">
            <div className="w-full max-w-[1280px] mx-auto p-4">{page}</div>
          </div>
          <footer className="w-full flex justify-center items-center h-[70px] shrink-0 bg-[#092F22]">
            footer
          </footer>
        </div>
      </div>
    </main>
  );
}

import clsx from "clsx";
import { useState } from "react";

export default function QQLayout(page) {
  const [pageData, setPageData] = useState({
    isSidebarOpen: false,
  });
  return (
    <main className="w-full relative bg-amber-50">
      <div className="w-full flex bg-amber-100">
        <div
          className={clsx(
            "w-[50%] h-[100dvh] flex flex-col gap-5 sticky top-0 bg-amber-200",
            !pageData.isSidebarOpen && "hidden"
          )}
        >
          <button className="h-[70px] bg-amber-300">Btn</button>
          <aside className="h-[70px] bg-amber-300">aside</aside>
        </div>

        <div className="w-full h-[100dvh] flex flex-col bg-amber-200">
          <header className="w-full flex justify-center items-center h-[70px] sticky top-0 shrink-0 bg-amber-300">
            header
          </header>
          <div className="w-full flex justify-center items-center h-[70px] sticky top-[70px] shrink-0 bg-amber-300">
            navigation
          </div>
          <div className="w-full flex grow bg-amber-300">
            <div className="w-full max-w-[1280px] mx-auto p-4">{page}</div>
          </div>
          <footer className="w-full flex justify-center items-center h-[70px] shrink-0 bg-amber-300">
            footer
          </footer>
        </div>
      </div>
    </main>
  );
}

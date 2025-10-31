import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import SideMenu from "@/components/SideMenu";
import ShoppingCart from "@/components/ShoppingCart";

export default function QQLayout(page) {
  return (
    <main className="w-full">
      <div className="w-full flex">
        <SideMenu />

        <div className="w-full h-full flex flex-col">
          <header className="w-full flex justify-center items-center h-[70px] sticky top-0 shrink-0 z-10 bg-[#092F22] text-white">
            header
          </header>
          <div className="w-full flex justify-center items-center h-[70px] sticky top-[70px] shrink-0 z-10 bg-[#0c3d2c] text-white">
            navigation
          </div>
          <div className="w-full flex grow bg-[#073926]">
            <div className="w-full max-w-[1280px] mx-auto p-4">{page}</div>
          </div>
          <footer className="w-full flex justify-center items-center h-[70px] shrink-0 bg-[#092F22] text-white">
            footer
          </footer>
        </div>

        <ShoppingCart />
      </div>
    </main>
  );
}

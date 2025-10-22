import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import { ListIndentIncrease, ListIndentDecrease } from "lucide-react";

import HomeSVG from '@/assets/qq/icons/home.svg'
import CasinoSVG from '@/assets/qq/icons/casino.svg'
import SlotsSvg from '@/assets/qq/icons/slots.svg'
import SportsSvg from '@/assets/qq/icons/sports.svg'
import LotterySVG from '@/assets/qq/icons/lottery.svg'
import FishingSVG from '@/assets/qq/icons/fish.svg'
import PromotionSVG from '@/assets/qq/icons/promo.svg'

import clsx from "clsx";
import SideMenu from "@/components/SideMenu";
import ShoppingCart from "@/components/ShoppingCart";


export default function QQLayout(page) {

  const isLessThan768 = useMediaQuery("(max-width: 768px)");

  const [pageData, setPageData] = useState({
    isSidebarOpen: true,
  });

  return (
    <main className="w-full">
      <div className="w-full flex">
        <SideMenu />

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

        <ShoppingCart />
      </div>
    </main>
  );
}

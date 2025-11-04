import QQLayout from "@/layouts/QQLayout";
import Slot from "@/components/Slot";

import data from "@/mock/lotteries";
import clsx from "clsx";

import { useState, useEffect, useRef } from "react";

const splitLotteryData = (apiData) => {
  const basicInfoArray = [];
  const topPrizesArray = [];
  const specialPrizesArray = [];
  const consolationPrizesArray = [];

  apiData.forEach((lottery) => {
    const { name, date, image, backgroundColor, result } = lottery;

    basicInfoArray.push({
      name: name,
      date: date,
      image: image,
      bgColor: backgroundColor,
    });

    if (result && result.top_prizes) {
      topPrizesArray.push({
        name: name,
        top_three_prizes: result.top_prizes.map((p) => ({
          position: p.position,
          value: p.value,
        })),
      });
    }

    if (result && result.special_prizes) {
      specialPrizesArray.push({
        name: name,
        special_prizes: result.special_prizes.map((p) => ({
          position: p.position,
          value: p.value,
        })),
      });
    }

    if (result && result.consolation_prize) {
      consolationPrizesArray.push({
        name: name,
        consolation_prizes: result.consolation_prizes.map((p) => ({
          position: p.position,
          value: p.value,
        })),
      });
    }
  });

  return {
    basicInfo: basicInfoArray,
    topPrizes: topPrizesArray,
    specialPrizes: specialPrizesArray,
    consolationPrizes: consolationPrizesArray,
  };
};

export default function Lottery_3() {
  const [pageData, setPageData] = useState({
    tabs: ["Result", "Payout Table", "Bet Now"],
    selectedTab: "Result",
  });

  const [numbers, setNumbers] = useState([0, 0, 0, 0]);

  const bannerWidthRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState(0);

  const [basicInfo, setBasicInfo] = useState([]);
  const [topPrizes, setTopPrizes] = useState([]);
  const [specialPrizes, setSpecialPrizes] = useState([]);
  const [consolationPrizes, setConsolationPrizes] = useState([]);

  useEffect(() => {
    const { basicInfo, topPrizes, specialPrizes, consolationPrizes } =
      splitLotteryData(data.results);

    setBasicInfo(basicInfo);
    setTopPrizes(topPrizes);
    setSpecialPrizes(specialPrizes);
    setConsolationPrizes(consolationPrizes);
  }, []);

  useEffect(() => {
    if (!bannerWidthRef) return;

    const handleResize = () => {
      // 確保 current 存在
      if (bannerWidthRef.current) {
        setBannerWidth(bannerWidthRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center gap-2">
      <div
        ref={bannerWidthRef}
        className={clsx(
          "w-full aspect-auto rounded-xl bg-amber-50",
          "flex justify-center items-center"
        )}
      >
        {bannerWidth > 0 && (
          <Slot
            parentWidth={bannerWidth}
            numbers={numbers}
            setNumbers={setNumbers}
          />
        )}
      </div>

      <div className="flex w-full items-center justify-center gap-x-[4px]">
        {pageData.tabs.map((tab, idx) => (
          <button
            key={idx}
            className={clsx(
              "w-full max-w-[300px] bg-[var(--bg-secondary)]",
              "border-[2px] py-[12px]",
              idx === 0 && "rounded-l-[12px]",
              idx === pageData.tabs.length - 1 && "rounded-r-[12px]",
              pageData.selectedTab === tab
                ? "border-amber-300 text-amber-300"
                : "border-white text-white"
            )}
            onClick={() =>
              setPageData((prev) => ({
                ...prev,
                selectedTab: tab,
              }))
            }
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

Lottery_3.getLayout = QQLayout;

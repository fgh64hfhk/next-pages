import QQLayout from "@/layouts/QQLayout";
import data from "@/mock/lotteries";
import clsx from "clsx";
import { useEffect, useState } from "react";

const splitLotteryData = (apiData) => {
  const basicInfoArray = [];
  const topPrizesArray = [];
  const specialPrizesArray = [];
  const consolationPrizesArray = [];

  apiData.forEach((lottery) => {
    const { name, date, image, bgColor, result } = lottery;

    basicInfoArray.push({
      name: name,
      date: date,
      image: image,
      bgColor: bgColor,
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
        consolation_prizes: result.consolation_prize.map((p) => ({
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

const bannerColor = [
  "bg-[#53BEF0]",
  "bg-[#EA2A2E]",
  "bg-[#35AE45]",
  "bg-[#FFDB4D]",
  "bg-[#1541F1]",
  "bg-[#FFDB4D]",
  "bg-[#EA2A2E]",
  "bg-[#AFAF13]",
  "bg-[#FFA215]",
];

const PrizeList = ({ lotteryName, prizes, prizeKey }) => {
  // 檢查 prizes 是否存在且是陣列
  const prizeArray = prizes[prizeKey];
  if (!prizeArray || !Array.isArray(prizeArray)) {
    return <div>No prize data available for {lotteryName}.</div>;
  }

  return (
    <div className="prize-list-container">
      **{lotteryName}** ({prizeKey.replace(/_/g, " ").toUpperCase()}):
      <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
        {prizeArray.map((p) => (
          <li key={p.position} style={{ marginBottom: 4 }}>
            **#{p.position}**: {p.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Lottery_3() {
  const [pageData, setPageData] = useState({});

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

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center">
      <div
        className={clsx(
          "w-full aspect-video md:aspect-auto rounded-xl",
          "bg-amber-50"
        )}
      ></div>

      {/* --- 區塊一: 基本資訊 (Name & Date) --- */}
      <h2>📅 基本資訊</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          borderBottom: "2px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        {basicInfo.map((item) => (
          <div
            key={item.name}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              minWidth: "150px",
            }}
          >
            **{item.name.toUpperCase()}**
            <p style={{ margin: "5px 0" }}>開獎日: {item.date}</p>
            {/*  如果需要顯示圖標 */}
          </div>
        ))}
      </div>

      {/* --- 區塊二: 頭獎 (Top Prizes) --- */}
      <h2>🥇 頭獎 (Top 3)</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {topPrizes.map((item) => (
          <PrizeList
            key={item.name}
            lotteryName={item.name.toUpperCase()}
            prizes={item}
            prizeKey="top_three_prizes"
          />
        ))}
      </div>
      {/* ------------------------------------------------------------------ */}
      {/* 新增區塊：特別獎 (Special Prizes) */}
      {/* ------------------------------------------------------------------ */}
      <h2>🥈 特別獎 (Special 10)</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {specialPrizes.map((item) => (
          <PrizeList
            key={item.name}
            lotteryName={item.name.toUpperCase()}
            prizes={item}
            prizeKey="special_prizes" // 注意這裡的鍵名
          />
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 新增區塊：安慰獎 (Consolation Prizes) */}
      {/* ------------------------------------------------------------------ */}
      <h2>🥉 安慰獎 (Consolation 10)</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {consolationPrizes.map((item) => (
          <PrizeList
            key={item.name}
            lotteryName={item.name.toUpperCase()}
            prizes={item}
            prizeKey="consolation_prizes" // 注意這裡的鍵名
          />
        ))}
      </div>
    </div>
  );
}

Lottery_3.getLayout = QQLayout;

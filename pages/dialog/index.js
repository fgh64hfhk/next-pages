import React, { useEffect, useRef, useState } from "react";
import { X, Badge } from "lucide-react";
import Image from "next/image";
import MyImage from "@/public/next.svg";
import clsx from "clsx";

export default function AuthDialogSimplified({ isOpen = true, onClose }) {
  // 假資料 / 本地狀態（只保留最基本的兩個欄位）
  const [tab, setTab] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const providers = [
    { code: "cq9", name: "CQ9", index: "cq9#cq9" },
    { code: "btg", name: "BIG TIME GAMING", index: "evs#btg" },
    { code: "rt", name: "RED TIGER", index: "evs#rt" },
    { code: "nt", name: "NETENT", index: "evs#nt" },
    { code: "nlc", name: "NO LIMIT CITY", index: "evs#nlc" },
    { code: "f5g", name: "5G GAMES", index: "jx#f5g" },
    { code: "png", name: "PLAY N GO", index: "jx#png" },
    { code: "mg", name: "MICRO GAMING", index: "jx#mg" },
    { code: "pp", name: "PRAGMATIC PLAY", index: "jx#pp" },
    { code: "pt", name: "PLAY TECH", index: "jx#pt" },
    { code: "sb", name: "SPRIBE", index: "jx#sb" },
    { code: "hs", name: "HACK SAW", index: "jx#hs" },
    { code: "jili", name: "JILI", index: "jili#jili" },
    { code: "relax", name: "RELAX GAMING", index: "jx#relax" },
    { code: "yg", name: "YGGDRASIL", index: "jx#yg" },
    { code: "ag", name: "PLAY ACE", index: "ag#ag" },
    { code: "atg", name: "ATG GAMES", index: "jx#atg" },
    { code: "stm", name: "SLOTMILL", index: "jx#stm" },
  ];

  function groupProvidersByName(providers) {
    const groups = {};

    providers.forEach((element) => {
      const firstChar = element.name.trim().charAt(0).toUpperCase();

      let key;
      if (/[0-9]/.test(firstChar)) {
        key = "0-9";
      } else if (/[A-Z]/.test(firstChar)) {
        key = firstChar;
      } else {
        key = "#";
      }

      // 初始化物件的陣列
      if (!groups[key]) {
        groups[key] = [];
      }

      // 將當前 provider 加入
      groups[key].push(element);
    });

    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => a.name.localeCompare(b.name));
    });

    const sortedGroups = {};

    Object.keys(groups)
      .sort((a, b) => a.localeCompare(b))
      .forEach((key) => {
        sortedGroups[key] = groups[key];
      });

    return sortedGroups;
  }

  // console.log(providers);
  // console.log(groupProvidersByName(providers));

  // ESC 關閉
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // 假提交
  const handleSubmit = () => {
    // 這裡只示範：實際串接時改寫為真正的 API 呼叫
    console.log(`[${tab}] submit`, form);
    // 成功後可關閉
    onClose();
  };

  return (
    <div id="dialog" className="w-full h-[100vh]">
      <div
        className={clsx(
          "w-full h-full max-h-[calc(100dvh-64px)] p-4 fixed top-0 left-0 bg-[#092F22] z-50",
          "flex flex-col gap-[15px] rounded-xl"
        )}
      >
        {/* Banner */}
        <div className="w-full aspect-[740/300] rounded-xl overflow-hidden bg-amber-50">
          <Image
            className="w-full h-full object-cover"
            src={MyImage}
            alt="myImage"
            priority
            onClick={() => {}}
          />
        </div>

        {/* Title */}
        <div className="flex justify-between items-center rounded-xl">
          <h1 className="text-[#FFBE2A] font-bold">PROVIDER</h1>
          <button className="w-[36px] h-[36px] flex justify-center items-center">
            <X color="#9BC9B0" />
          </button>
        </div>

        {/* Groups */}
        <div className="w-full flex flex-col gap-y-[15px] overflow-y-auto">
          {Object.entries(groupProvidersByName(providers)).map(
            ([key, providers], idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h1 className="flex gap-6 items-center">
                  <div className="whitespace-nowrap text-[#FFFFFF] font-bold">
                    {key}
                  </div>
                  <div className="w-full h-[2px] bg-[#18543F]"></div>
                </h1>
                <div className="flex flex-wrap gap-2">
                  {providers.map((provider, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "w-[calc((100%-(2-1)*8px)/2)] h-[40px] flex items-center gap-2 px-3 py-2 border  rounded-[4px]",
                        idx === 0
                          ? "border-[#FFBE2A] text-[#FFBE2A] font-bold"
                          : "border-[#18543F] text-white font-normal"
                      )}
                    >
                      <div>
                        <Badge />
                      </div>
                      <div>{provider.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

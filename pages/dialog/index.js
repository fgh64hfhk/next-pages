import React, { useEffect, useRef, useState } from "react";
import { X, Badge } from "lucide-react";
import Image from "next/image";
import MyImage from "@/public/next.svg";
import clsx from "clsx";

export default function AuthDialogSimplified({ isOpen = true, onClose }) {
  // 假資料 / 本地狀態（只保留最基本的兩個欄位）
  const [tab, setTab] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

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
        {/* <div className="w-full aspect-[740/300] rounded-xl overflow-hidden bg-amber-50">
          <Image
            className="w-full h-full object-cover"
            src={MyImage}
            alt="myImage"
            onClick={() => {}}
          />
        </div> */}

        {/* Title */}
        <div className="flex justify-between items-center rounded-xl">
          <h1 className="text-[#FFBE2A] font-bold">PROVIDER</h1>
          <button className="w-[36px] h-[36px] flex justify-center items-center">
            <X color="#9BC9B0" />
          </button>
        </div>

        {/* Groups */}
        <div className="w-full flex flex-col gap-y-[15px] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <h1 className="flex gap-6 items-center">
              <div className="whitespace-nowrap text-[#FFFFFF] font-bold">
                0-9
              </div>
              <div className="w-full h-[2px] bg-[#18543F]"></div>
            </h1>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 15 }).map((_, idx) => (
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
                  <div>ICO</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="flex gap-6 items-center">
              <div className="whitespace-nowrap text-[#FFFFFF] font-bold">
                0-9
              </div>
              <div className="w-full h-[2px] bg-[#18543F]"></div>
            </h1>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 15 }).map((_, idx) => (
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
                  <div>ICO</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="flex gap-6 items-center">
              <div className="whitespace-nowrap text-[#FFFFFF] font-bold">
                0-9
              </div>
              <div className="w-full h-[2px] bg-[#18543F]"></div>
            </h1>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 15 }).map((_, idx) => (
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
                  <div>ICO</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="flex gap-6 items-center">
              <div className="whitespace-nowrap text-[#FFFFFF] font-bold">
                0-9
              </div>
              <div className="w-full h-[2px] bg-[#18543F]"></div>
            </h1>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 15 }).map((_, idx) => (
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
                  <div>ICO</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

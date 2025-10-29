import QQLayout from "@/layouts/QQLayout";
import SpeedoMeter from "@/components/SpeedoMeter";

import { useState } from "react";

import clsx from "clsx";

// 定義初始動畫狀態
const initialArmState = {
  armTop: "-18px",
  armHeight: "50%",
  knobTop: "-15px",
  knobHeight: "16px",
  armShadowTop: "66px",
  ringShadowOpacity: 0,
  isAnimating: false,
};

export default function Lottery() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);

  const [armState, setArmState] = useState(initialArmState);

  const generateSingleNumber = () => Math.floor(Math.random() * 9) + 1;

  const handleSlotTrigger = () => {
    if (armState.isAnimating) return;

    setArmState((prev) => ({ ...prev, isAnimating: true }));

    // 拉桿向下動畫
    setArmState((prev) => ({
      ...prev,
      armTop: "45px",
      armHeight: "2%",
      knobTop: "-20px",
      knobHeight: "20px",
      armShadowTop: "50px",
      ringShadowOpacity: 1,
    }));

    // 號碼生成邏輯
    setNumbers([
      generateSingleNumber(),
      generateSingleNumber(),
      generateSingleNumber(),
      generateSingleNumber(),
    ]);

    // 拉桿彈回動畫
    setTimeout(() => {
      setArmState((prev) => ({
        ...prev,
        armTop: "-18px",
        armHeight: "50%",
        knobTop: "-15px",
        knobHeight: "16px",
        armShadowTop: "66px",
        ringShadowOpacity: 0,
      }));
    }, 500);

    // 解除鎖定
    setTimeout(() => {
      setArmState((prev) => ({ ...prev, isAnimating: false }));
    }, 1000);
  };

  const transitionClass = "transition-all duration-300 ease-in-out";

  return (
    <div id="lottowrap" className="w-full h-[100dvh] relative z-10 bg-amber-50">
      <div
        id="lottocontent"
        className="min-w-[1024px] max-w-[1280px] w-full mx-auto"
      >
        <h2 id="pagetitle" className="">
          全馬最高彩票賠率
        </h2>
        <div
          id="generator-wrapper "
          className={clsx(
            "border-[2px] rounded-[10px] bg-[#097b4a] w-fit mx-auto mb-[35px] py-[20px] px-[15px] shadow-[inset_0_0_10px_3px_#40f7a7] relative"
          )}
        >
          <div
            id="generator-title"
            className="text-[30px] text-center mb-[20px] font-[500] text-white"
          >
            幸運號碼
          </div>

          <SpeedoMeter value={numbers} speed={800} delay={1000} />

          {/* 觸發器綁定事件和動畫狀態 */}
          <div
            id="slot-trigger"
            onClick={handleSlotTrigger}
            style={{
              pointerEvents: armState.isAnimating ? "none" : "unset",
            }}
            className="cursor-pointer w-[37px] h-[100px] right-[-38px] bottom-0 absolute"
          >
            <div
              id="arm"
              style={{ top: armState.armTop, height: armState.armHeight }}
              className={clsx(
                transitionClass,
                "bg-[linear-gradient(to_right,_#787878_0%,_#939393_47%,_#cacaca_87%,_#e6e6e6_100%)] rounded-[0_0_4px_4px] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]",
                "absolute w-[6px] left-[14px] z-30 overflow-visible"
              )}
            >
              <div
                id="knob"
                style={{ top: armState.knobTop, height: armState.knobHeight }}
                className={clsx(
                  transitionClass,
                  "bg-[radial-gradient(ellipse_at_center,_#ff6363_0%,_#cf0404_100%)] rounded-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.4)]",
                  "absolute w-[18px] left-[-6px] z-40"
                )}
              />
            </div>
            <div
              id="arm-shadow"
              style={{ bottom: armState.armShadowTop }}
              className={clsx(
                transitionClass,
                "bg-black rounded-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.4)]",
                "absolute h-[6px] w-[8px] left-[13px] z-20"
              )}
            />
            <div
              id="ring1"
              className={clsx(
                "bg-[linear-gradient(to_bottom,_#282828_0%,_#959595_14%,_#d1d1d1_37%,_#bababa_49%,_#959595_67%,_#212121_100%)] rounded-[5px] shadow-[inset_0_2px_3px_rgba(0,0,0,0.8)]",
                "absolute h-full w-[12px] left-0 z-20"
              )}
            >
              <div
                id="ring1-shadow"
                style={{ opacity: armState.ringShadowOpacity }}
                className={clsx(
                  "transition duration-[380ms] ease-in-out",
                  "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.2)_0%,_rgba(13,13,13,0.18)_46%,_rgba(1,1,1,0.18)_50%,_rgba(10,10,10,0.18)_53%,_rgba(78,78,78,0.15)_76%,_rgba(56,56,56,0.10)_87%,_rgba(27,27,27,0.05)_100%)] rounded-[5px]",
                  "absolute h-[50%] w-[10px] left-[1px] top-0"
                )}
              />
            </div>
            <div
              id="ring2"
              className={clsx(
                "bg-[linear-gradient(to_bottom,_#282828_0%,_#959595_14%,_#d1d1d1_37%,_#bababa_49%,_#959595_67%,_#212121_100%)] rounded-[5px] shadow-[inset_0_2px_3px_rgba(0,0,0,0.8)]",
                "absolute h-[80%] w-[15px] left-[8px] overflow-hidden top-[10%] z-10"
              )}
            >
              <div
                id="ring2-shadow"
                style={{ opacity: armState.ringShadowOpacity }}
                className={clsx(
                  "transition duration-[380ms] ease-in-out",
                  "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.15)_0%,_rgba(13,13,13,0.15)_46%,_rgba(1,1,1,0.15)_50%,_rgba(10,10,10,0.15)_53%,_rgba(78,78,78,0.15)_76%,_rgba(56,56,56,0.15)_87%,_rgba(27,27,27,0.15)_100%)] rounded-[5px]",
                  "absolute h-[50%] w-[10px] left-0 top-0 z-10"
                )}
              />
            </div>
          </div>
          
          <div
            id="slot-trigger-hint"
            className={clsx(
              "absolute top-[60px] right-[-210px] text-center text-white leading-[20px] text-[14px] bg-black p-[10px] rounded-[5px] ",
              "animate-[hintAnim_1s_infinite_alternate]",
              "before:content-[''] before:absolute before:top-[50%] before:left-[-8px] before:translate-y-[-50%] before:bg-black",
              "before:w-[15px] before:h-[15px] before:rotate-[135deg]"
            )}
          >
            點擊獲取 <br /> 你的幸運號碼
          </div>
        </div>
      </div>
    </div>
  );
}

Lottery.getLayout = QQLayout;

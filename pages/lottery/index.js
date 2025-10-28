import QQLayout from "@/layouts/QQLayout";
import clsx from "clsx";

export default function Lottery() {

  

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
          <div
            id="generator"
            className="flex justify-center items-center w-full"
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                id={`number-${idx + 1}`}
                className={clsx(
                  "generator-number odometer",
                  "w-[70px] h-[70px] rounded-[50px] shadow-[0_0_10px_3px_#6ed841]",
                  "flex justify-center items-center text-[40px] font-[500] mx-[15px]",
                  "animate-[glow_1s_infinite_alternate] bg-amber-50"
                )}
              />
            ))}
          </div>

          <div
            id="slot-trigger"
            className="cursor-pointer w-[37px] h-[100px] right-[-38px] bottom-0 absolute"
          >
            <div
              id="arm"
              className={clsx(
                "bg-[linear-gradient(to_right,_#787878_0%,_#939393_47%,_#cacaca_87%,_#e6e6e6_100%)] rounded-[0_0_4px_4px] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]",
                "absolute h-[50%] w-[6px] left-[14px] top-[-18px] z-30 overflow-visible"
              )}
            >
              <div
                id="knob"
                className={clsx(
                  "bg-[radial-gradient(ellipse_at_center,_#ff6363_0%,_#cf0404_100%)] rounded-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.4)]",
                  "absolute h-[16px] w-[18px] left-[-6px] top-[-15px] z-40"
                )}
              />
            </div>
            <div
              id="arm-shadow"
              className={clsx(
                "bg-black rounded-[10px] bottom-[66px] shadow-[0_1px_1px_rgba(0,0,0,0.4)]",
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
                className={clsx(
                  "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.2)_0%,_rgba(13,13,13,0.18)_46%,_rgba(1,1,1,0.18)_50%,_rgba(10,10,10,0.18)_53%,_rgba(78,78,78,0.17)_76%,_rgba(56,56,56,0.16)_87%,_rgba(27,27,27,0.15)_100%)] rounded-[5px]",
                  "absolute h-[50%] w-[10px] left-0 opacity-0 top-0"
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
                className={clsx(
                  "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.15)_0%,_rgba(13,13,13,0.15)_46%,_rgba(1,1,1,0.15)_50%,_rgba(10,10,10,0.15)_53%,_rgba(78,78,78,0.15)_76%,_rgba(56,56,56,0.15)_87%,_rgba(27,27,27,0.15)_100%)] rounded-[5px]",
                  "absolute h-[50%] w-[10px] left-0 opacity-0 top-0 z-10"
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

import { useState } from "react";
import clsx from "clsx";

const initialArmState = {
  armTop: "-18px",
  armHeight: "50%",
  knobTop: "-15px",
  knobHeight: "16px",
  armShadowTop: "66px",
  ringShadowTop: "0px",
  ringShadowOpacity: 0,
  isAnimating: false,
};

const transitionClass = "transition-all duration-300 ease-in-out";

export default function SlotArm({ onChangeNumbers }) {
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
      ringShadowTop: "50%",
      ringShadowOpacity: 1,
    }));

    // 號碼生成邏輯
    onChangeNumbers([
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
        ringShadowTop: "0px",
        ringShadowOpacity: 0,
      }));
    }, 500);

    // 解除鎖定
    setTimeout(() => {
      setArmState((prev) => ({ ...prev, isAnimating: false }));
    }, 1000);
  };

  return (
    <div
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
          style={{
            top: armState.ringShadowTop,
            opacity: armState.ringShadowOpacity,
          }}
          className={clsx(
            transitionClass,
            "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.2)_0%,_rgba(13,13,13,0.18)_46%,_rgba(1,1,1,0.18)_50%,_rgba(10,10,10,0.18)_53%,_rgba(78,78,78,0.15)_76%,_rgba(56,56,56,0.16)_87%,_rgba(27,27,27,0.15)_100%)] rounded-[5px]",
            "absolute h-[50%] w-[10px] left-[1px] top-0 z-10"
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
          style={{
            top: armState.ringShadowTop,
            opacity: armState.ringShadowOpacity,
          }}
          className={clsx(
            transitionClass,
            "bg-[linear-gradient(to_bottom,_rgba(149,149,149,0.15)_0%,_rgba(13,13,13,0.15)_46%,_rgba(1,1,1,0.15)_50%,_rgba(10,10,10,0.15)_53%,_rgba(78,78,78,0.15)_76%,_rgba(56,56,56,0.15)_87%,_rgba(27,27,27,0.15)_100%)] rounded-[5px]",
            "absolute h-[50%] w-[10px] left-[1px] top-0 z-10"
          )}
        />
      </div>
    </div>
  );
}

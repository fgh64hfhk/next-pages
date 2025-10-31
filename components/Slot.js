import { useState } from "react";
import clsx from "clsx";

import SpeedoMeter from "@/components/SpeedoMeter";
import SlotArm from "@/components/SlotArm";
import SlotHint from "@/components/SlotHint";

export default function Slot({ parentWidth }) {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const basicScaleRatio = 430 / 1248;

  let scaleRatio = 1;
  if (parentWidth < 1248) {
    scaleRatio = (basicScaleRatio * parentWidth) / 430;
  }

  return (
    <div
      className="w-[430px] h-full flex flex-col justify-center items-center gap-2 p-2 mx-auto"
      style={{
        transform: `scale(${scaleRatio})`,
        transformOrigin: "center",
      }}
    >
      <h2 className="text-black text-xl">全馬最高彩票賠率</h2>
      <div
        className={clsx(
          "flex flex-col gap-2 relative",
          "bg-[#097b4a] shadow-[inset_0_0_10px_3px_#40f7a7]",
          "p-5 border-[2px] rounded-[10px]"
        )}
      >
        <div className="w-full text-[24px] text-center text-white p-2">
          幸運號碼
        </div>
        <SpeedoMeter value={numbers} />
        <SlotArm onChangeNumbers={setNumbers} />
        <SlotHint />
      </div>
    </div>
  );
}

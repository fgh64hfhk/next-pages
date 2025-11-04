import clsx from "clsx";

export default function SpeedoMeter({
  targetDigits,
  spinGearLevel = 5,
  startDelayMs = 500,
  fontSize = 40,
  textColor = "black",
  timingFunction = "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
}) {
  const BASE_TIME_MS = 3500;
  const actualSpeedMs = Math.round(BASE_TIME_MS / spinGearLevel);

  return (
    <div className="w-[25em] h-full flex justify-between items-center">
      {targetDigits.map((val, idx) => (
        <div
          key={idx}
          className={clsx(
            "w-[5em] h-[5em] rounded-[50px] shadow-[0_0_10px_3px_#6ed841] bg-white",
            "flex justify-center items-center",
            "animate-[glow_1s_infinite_alternate]"
          )}
        >
          <div
            className="overflow-hidden"
            style={{
              height: `${fontSize}px`,
            }}
          >
            <div
              className="flex flex-col"
              style={{
                height: `${fontSize}px`,
                fontSize: `${fontSize}px`,
                lineHeight: `${fontSize}px`,
                color: textColor,
                marginTop: `-${val * fontSize}px`,
                transition: `margin-top ${actualSpeedMs}ms ${timingFunction}`,
                transitionDelay: `${idx * startDelayMs}ms`,
              }}
            >
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center text-center"
                >
                  {idx}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

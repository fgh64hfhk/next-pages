import clsx from "clsx";

export default function SpeedoMeter({
  value,
  speed = 1000,
  delay = 500,
  size = 36,
  color = "black",
  easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
}) {
  const digitArray = value;

  return (
    <div className="w-[25em] h-full flex justify-between items-center">
      {digitArray.map((val, idx) => (
        <div
          key={idx}
          className={clsx(
            "w-[5em] h-[5em] rounded-[50px] shadow-[0_0_10px_3px_#6ed841] bg-white",
            "flex justify-center items-center",
            "animate-[glow_1s_infinite_alternate]"
          )}
        >
          {/* 遮罩 */}
          <div
            className="overflow-hidden"
            style={{
              height: `${size}px`,
            }}
          >
            <div
              className="flex flex-col"
              style={{
                height: `${size}px`,
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                color: color,
                // marginTop: `-${val}em`,
                marginTop: `-${val * size}px`,
                transition: `margin-top ${speed}ms ${easing}`,
                transitionDelay: `${idx * delay}ms`,
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

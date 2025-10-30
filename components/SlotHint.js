import clsx from "clsx";

export default function SlotHint() {
  return (
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
  );
}

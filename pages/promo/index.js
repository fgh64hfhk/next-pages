import QQLayout from "@/layouts/QQLayout";

export default function Promo() {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 bg-[#073926]">
      <div className="h-[45px] flex gap-1 mx-auto">
        {Array.from({ length: 7 }).map((_, idx) => (
          <button
            key={idx}
            className="w-[110px] h-full px-4 border border-[#18543F] rounded-lg bg-[#092F22] text-center text-white font-bold"
          >
            {idx}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            className="w-[calc((100%-2*10px)/3)] h-[334px] bg-red-50"
          >
            {idx}
          </div>
        ))}
      </div>
    </div>
  );
}

Promo.getLayout = QQLayout;

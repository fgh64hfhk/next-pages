import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  const N = 5;
  const slots = N + 1;
  return (
    <div className="w-[500px] h-[500px]">
      <div className="h-full flex flex-col justify-center items-center bg-amber-500">
        <div className="w-full h-[300px] relative">
          {Array.from({ length: 5 }).map((_, idx) => {
            const leftPct = ((idx + 1) / slots) * 100;
            return (
              <div
                key={idx}
                className="circle absolute w-[30px] h-[30px] flex justify-center items-center rounded-full"
                style={{ left: `${leftPct}%` }}
              >
                {idx}
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-between">
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = RootLayout;

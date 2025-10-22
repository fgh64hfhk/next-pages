import clsx from "clsx";

export default function RootLayout(page) {
  return (
    <div className="w-full h-full flex flex-col bg-amber-50">
      <header className="w-full h-[60px] flex sticky top-0 items-center bg-amber-100 z-10">
        <div className={clsx(
          "w-[260px] h-[60px] shrink-0 items-end px-[20px] bg-amber-200 text-black",
          false ? "hidden" : "flex"
        )}>
          <button className="w-[50px] h-[50px] bg-black text-white">
            Switch
          </button>
        </div>
        <div className="w-full max-w-[1280px] h-[60px] mx-auto flex justify-between items-end bg-amber-200 text-black">
          <div>
            <button className="w-[50px] h-[50px] bg-black text-white">
              Logo
            </button>
          </div>
          <div>
            <button className="w-[50px] h-[50px] bg-black text-white">
              Action
            </button>
          </div>
        </div>
      </header>

      <div className="w-full flex bg-amber-100">
        <aside className={clsx(
          "w-[260px] h-[calc(100dvh-60px)] shrink-0 sticky top-[60px] bg-amber-200 text-black",
          true ? "hidden" : "flex"
        )}>
          <nav className="w-full flex flex-col gap-y-[12px] p-[8px] items-center">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full h-[36px] flex items-center bg-amber-300 gap-[13px] rounded-xl px-[16px]"
              >
                <div className="w-[20px] h-[20px] bg-amber-400 flex justify-center items-center text-black">
                  {idx}
                </div>
                <div className="text-black">Home</div>
              </div>
            ))}
            <div className="w-full min-h-[36px] max-h-[500px] flex flex-col bg-amber-300 rounded-xl">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[13px] px-[16px] py-[8px]"
                >
                  <div className="w-[20px] h-[20px] bg-amber-400 flex justify-center items-center text-black">
                    {idx}
                  </div>
                  <div className="text-black">Dropdown</div>
                </div>
              ))}
            </div>
          </nav>
        </aside>
        <main className="w-full max-w-[1280px] mx-auto flex justify-center bg-amber-200 text-black">
          {page}
        </main>
      </div>
    </div>
  );
}

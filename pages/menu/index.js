import QQLayout from "@/layouts/QQLayout";
import clsx from "clsx";

export default function FooterMenu() {
  const items = [
    { id: "menu", label: "MENU" },
    { id: "login", label: "LOGIN/REG" },
    { id: "promo", label: "PROMO" },
    { id: "chat", label: "CHAT" },
  ];
  return (
    <div className="w-screen h-[60px] fixed left-0 bottom-0 flex items-center z-[50] bg-amber-100">
      <div className="w-full h-full flex text-[24px]">
        {items.map((item, idx) => (
          <div key={item.id} className="flex-1 h-full bg-amber-200">
            <button
              className={clsx("w-full h-full flex items-center justify-center")}
              onClick={() => console.log("clicked", item.id)}
            >
              <div className={clsx("flex flex-col items-center gap-1")}>
                <div className="w-[18px] h-[4px] bg-black" />
                <div>{item.label}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

FooterMenu.getLayout = QQLayout;

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
      <div className="w-full h-full flex justify-between items-center">
        {items.map((item, idx) => (
          <button
            key={item.id}
            className="w-[25%] h-full flex flex-col justify-center items-center gap-1"
            onClick={() => console.log("clicked", item.id)}
          >
            <div className="w-[5vw] h-[0.5vw] bg-black" />
            <div className="text-[3vw]">{item.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

FooterMenu.getLayout = QQLayout;

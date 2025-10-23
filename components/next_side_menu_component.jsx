import React from "react";
import { useRouter } from "next/router";

// --- Simple icon components (SVG) ---
const DashboardIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="5" rx="1" />
    <rect x="13" y="10" width="8" height="11" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
  </svg>
);
const SettingsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 15a7.97 7.97 0 0 0 .1-1 7.97 7.97 0 0 0-.1-1l2.1-1.6a.5.5 0 0 0 .1-.7l-2-3.4a.5.5 0 0 0-.6-.2l-2.5 1a8.12 8.12 0 0 0-1.7-1l-.4-2.7a.5.5 0 0 0-.5-.4h-4a.5.5 0 0 0-.5.4l-.4 2.7c-.6.3-1.1.7-1.7 1l-2.5-1a.5.5 0 0 0-.6.2l-2 3.4a.5.5 0 0 0 .1.7L4.5 13a8.12 8.12 0 0 0-.1 2l-2.1 1.6a.5.5 0 0 0-.1.7l2 3.4a.5.5 0 0 0 .6.2l2.5-1c.5.4 1 .8 1.7 1l.4 2.7a.5.5 0 0 0 .5.4h4a.5.5 0 0 0 .5-.4l.4-2.7c.6-.3 1.1-.7 1.7-1l2.5 1a.5.5 0 0 0 .6-.2l2-3.4a.5.5 0 0 0-.1-.7L19.4 15z" />
  </svg>
);
const UsersIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3z" />
    <path d="M8 13c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zM16 13c-.7 0-1.4.1-2 .3 1 .8 2 1.9 2 3.7v2h6v-2c0-2.7-5.3-4-6-4z" />
  </svg>
);
const ChevronUp = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

// --- Hard-coded variables (as requested) ---
const isSideMenusOpen = true; // 寫死：側邊選單是否顯示
const isSideMenusExpand = true; // 寫死：側邊選單是否展開
const isMobile = false; // 寫死：是否為行動裝置

// Hard-coded menus (包含二級選單與 icon component)
const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
    isExpand: true,
    subMenus: [
      { name: "Overview", path: "/dashboard/overview", icon: DashboardIcon },
      { name: "Stats", path: "/dashboard/stats", icon: DashboardIcon },
    ],
  },
  {
    name: "Users",
    path: "/users",
    icon: UsersIcon,
    isExpand: false,
    subMenus: [
      { name: "All Users", path: "/users/all", icon: UsersIcon },
      { name: "Invite", path: "/users/invite", icon: UsersIcon },
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    isExpand: false,
  },
];

export default function SideMenu() {
  const router = useRouter();
  const routeFullPath = router.asPath || "/";

  // Click handler (導頁)
  const handelMenuTabClick = (item) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  if (!isSideMenusOpen) return null;

  return (
    <nav
      ref={null}
      className={`bg-[#202231] py-[16px] [transition:width_0.3s] shrink-0 ${
        isSideMenusExpand ? "w-[237px]" : "w-[68px]"
      } ${
        isMobile
          ? "fixed w-full h-[calc(100dvh-112px)] top-[56px] bottom-[56px] left-0 z-[9999] touch-none"
          : "sticky h-[calc(100svh-56px)] top-[56px]"
      }`}
    >
      <ul className="flex flex-col gap-y-[12px] text-white px-[16px] text-[16px]">
        {menus.map((item, idx) => {
          const isActive = item.path && routeFullPath.includes(item.path);
          return (
            <li
              key={idx}
              className={`flex flex-col rounded-[15px] select-none cursor-pointer [transition:all_0.3s] ${
                isActive ? "bg-[#8907D3]" : "bg-[#3F4363]"
              } ${
                !item.isExpand ? "h-[36px] overflow-hidden" : "max-h-[500px]"
              }`}
            >
              {/* 一級選單 */}
              <div
                className="w-full h-[36px] flex items-center gap-x-[13px] p-[8px]"
                onClick={() => handelMenuTabClick(item)}
              >
                <item.icon
                  className={`w-[20px] h-[20px] ${
                    isActive ? "fill-[#FF36C9]" : "fill-[#B9BFF5]"
                  }`}
                />
                {isSideMenusExpand && <h6>{item.name}</h6>}

                {item.subMenus && isSideMenusExpand && (
                  <span
                    className={`ml-auto w-[20px] h-[20px] flex justify-center items-center rounded-md bg-[#6A6E8F] ${
                      item.isExpand ? "" : "rotate-180"
                    }`}
                  >
                    <ChevronUp className="w-[14px] h-[14px]" />
                  </span>
                )}
              </div>

              {/* 二級選單 */}
              {item.subMenus &&
                item.subMenus.map((subItem, subIdx) => {
                  const isSubActive = routeFullPath === subItem.path;
                  return (
                    <div
                      key={subIdx}
                      className={`w-full h-[36px] p-[8px] flex items-center gap-x-[13px] cursor-pointer [transition:all_0.3s] ${
                        isSubActive ? "bg-[#8907D3]" : "bg-[#3F4363]"
                      } ${
                        subIdx === item.subMenus.length - 1
                          ? "rounded-b-[15px]"
                          : ""
                      }`}
                      onClick={() => handelMenuTabClick(subItem)}
                    >
                      <subItem.icon
                        className={`w-[20px] h-[20px] ${
                          isSubActive ? "fill-[#FF36C9]" : "fill-[#B9BFF5]"
                        }`}
                      />
                      {isSideMenusExpand && <h6>{subItem.name}</h6>}
                    </div>
                  );
                })}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

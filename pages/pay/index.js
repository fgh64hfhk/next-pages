import QQLayout from "@/layouts/QQLayout";

// import sidebarMenu from "@/mock/menu";
import payment_config from "@/mock/payment_config";

export default function Payment() {
  return (
    // <div className="w-full flex flex-col gap-4 pb-4 px-[12px] xl:px-4">
    //   {/* 主選單項目 */}
    //   {sidebarMenu.map((item, idx) => (
    //     <div
    //       key={idx}
    //       className={clsx(
    //         "flex flex-col items-center xl:items-start bg-[var(--bg-secondary)] p-2 rounded-[8px]",
    //         item.isExpand && "gap-4 xl:gap-0"
    //       )}
    //     >
    //       <div
    //         className="w-[20px] h-[20px] xl:w-full xl:h-[24px] flex justify-center xl:justify-between cursor-pointer text-[var(--text-normal)]"
    //         onClick={() => handleSidebarMenuClick(item)}
    //       >
    //         <div className="flex items-center xl:gap-2">
    //           <item.icon className="w-[16px] h-[16px] fill-[var(--text-300)] shrink-0" />
    //           <span
    //             className={clsx(
    //               "hidden xl:block text-[var(--text-normal)] text-[14px]",
    //               item.active && "text-[var(--text-300)] font-semibold"
    //             )}
    //           >
    //             {item.tab}
    //           </span>
    //         </div>
    //         {item?.subMenus && (
    //           <div
    //             className={clsx(
    //               "hidden xl:block",
    //               item.active
    //                 ? "text-[var(--text-300)]"
    //                 : "text-[var(--text-normal)]",
    //               item.isExpand ? "transform rotate-180" : ""
    //             )}
    //           ></div>
    //         )}
    //       </div>

    //       {/* 二級選單項目 */}
    //       <div
    //         className={clsx(
    //           "flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
    //           "gap-4 pl-0 border-l-0",
    //           "xl:gap-2 xl:pl-4 xl:border-l-2 xl:border-[var(--opacity-200)]",
    //           item.isExpand ? "max-h-[200px] xl:mt-2 xl:ml-3" : "max-h-0"
    //         )}
    //       >
    //         {item.subMenus &&
    //           item.subMenus.map((subItem, idx) => (
    //             <div
    //               key={idx}
    //               className={clsx(
    //                 "w-[20px] h-[20px] xl:w-full xl:h-full flex justify-center xl:justify-start cursor-pointer",
    //                 subItem.active
    //                   ? "text-[var(--text-primary)] font-semibold"
    //                   : "text-[var(--text-normal)]"
    //               )}
    //               onClick={() => handleSidebarMenuClick(subItem)}
    //             >
    //               <subItem.icon
    //                 className="w-[16px] h-[16px] block xl:hidden fill-[var(--text-300)]"
    //                 fill={clsx(subItem.active && "!var(--text-primary)")}
    //               />
    //               <span className="hidden xl:block text-[13px]">
    //                 {subItem.tab}
    //               </span>
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="w-full flex flex-wrap gap-2 ">
      {
        payment_config.vendors.map((payment, idx) => (
          <div key={idx} className="w-[calc((100%-8px*4)/5)] border border-gray-400">
            {JSON.stringify(payment)}
          </div>
        ))
      }
    </div>
  );
}

Payment.getLayout = QQLayout;

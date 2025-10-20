import { useState, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import clsx from "clsx";
import QQLayout from "@/layouts/QQLayout";

export default function Promotions() {
  const isLessThan768 = useMediaQuery("(max-width: 768px)");

  const [pageData, setPageData] = useState({
    promotions: Array.from({ length: 3 }).fill({}),
    sorts: [],
    selectedSort: "",
    currentPage: 1,
    total: 0,
    per_page: 0,
    last_page: 0,
  });

  console.log(pageData);

  const OPTIONS = [
    {
      code: "ALL",
      name: "ALL",
    },
    {
      code: "WELCOME",
      name: "WELCOME",
    },
    {
      code: "DAILY",
      name: "DAILY",
    },
    {
      code: "WEEKLY",
      name: "WEEKLY",
    },
    {
      code: "SPECIAL",
      name: "SPECIAL",
    },
    {
      code: "REBATE",
      name: "REBATE",
    },
    {
      code: "VIP",
      name: "VIP",
    },
    {
      code: "918KISS",
      name: "918KISS",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-4">
      {/* 篩選區塊 */}
      <div className="flex flex-wrap md:flex-row gap-1 mx-auto">
        {OPTIONS.length &&
          OPTIONS.map((sort) => (
            <button
              key={sort.code}
              className={clsx(
                "h-[6cqw] md:h-[4cqw] border rounded",
                "text-center font-[700] text-[2cqw] md:text-[1.4cqw]",
                pageData.selectedSort === sort.code ? "bg-amber-50" : ""
              )}
              onClick={() =>
                // console.log("click")
                setPageData((prev) => ({
                  ...prev,
                  selectedSort: sort.code,
                  currentPage: 1,
                }))
              }
            >
              {sort.name}
            </button>
          ))}
      </div>

      {/* Promotion List 區塊 */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-[10px]">
        {pageData.promotions?.map((promotion, idx) => (
          <div
            key={idx}
            className="scale-container w-[100%] md:w-[calc((100%-2*10px)/3)] rounded-md overflow-hidden bg-[var(--bg-secondary)]"
          >
            <div
              key={promotion.code}
              className="card w-full h-full flex flex-col rounded-lg"
            >
              <div className="aspect-[358/172.12] md:aspect-[416/200] relative">
                {
                  <Image
                    className="object-cover"
                    src={
                      isLessThan768
                        ? "https://placehold.co/300x200"
                        : "https://placehold.co/600x400"
                    }
                    alt={promotion.name}
                    fill
                    unoptimized
                    priority
                  />
                }
              </div>
              <div className="h-full flex flex-col justify-between gap-3 px-3 py-4">
                <h1 className="text-[var(--text-300)] text-[2.3cqw] md:text-[4.5cqw] font-[700]">
                  {promotion.name}
                </h1>
                <p className="line-clamp-2 text-[var(--text-300)] text-[2.3cqw] md:text-[3cqw] font-[400]">
                  {promotion.excerpt?.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <div className="w-full flex justify-between gap-[2.3cqw] md:gap-[4.5cqw]">
                  <button className="w-[50%] h-[6cqw] md:h-[9cqw] rounded-md border border-[var(--text-200)] text-[var(--text-normal)] text-[2.3cqw] md:text-[4cqw] font-[700]">
                    Detail
                  </button>
                  <button
                    className="w-[50%] h-[6cqw] md:h-[9cqw] rounded-md border text-[var(--text-base)] text-[2.3cqw] md:text-[4cqw] font-[700] bg-[var(--bg-primary)]"
                    onClick={() => {}}
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!pageData.promotions?.length && (
          <div className="w-full flex justify-center items-center text-[var(--text-300)] min-h-[300px]">
            No contents found.
          </div>
        )}
      </div>

      {/* 文字敘述的區塊 */}
      <div className="scale-container w-full rounded-2xl p-6 hidden md:flex md:flex-col gap-2.5 bg-[var(--bg-normal)]">
        <h3 className="text-[var(--text-normal)] text-[1.5cqw]">
          Promotional Terms & Conditions
        </h3>
        <p className="text-[var(--text-normal)] text-[1.5cqw]">
          The following are the Terms and Conditions governing all the
          Promotions offered by QQclubs.com. Customer should be over the age of
          18, or the age of consent in the Customer&apos;s home jurisdiction,
          whichever is higher and has the mental capacity to take responsibility
          for the Customer&apos;s own actions and be bound by these Terms and
          Conditions. QQclubs.com shall reserves the right at any and all times
          to void any transactions involving minors. All bonuses offered are
          intended for recreation Customers only. Accounts identified or
          suspected as non-recreational play type or wager style or
          collaboration between parties is not eligible for this promotion and
          are subject to have any awarded bonuses plus winnings to be revoked at
          the sole discretion of QQclubs.com. You are only permitted to have one
          active account on the site. Reserves the right to monitor any effort
          to establish multiple accounts. In the event it is discovered that you
          have opened more than one account, all accounts will be closed without
          notice. Reserves the right to deny access to anyone. All offers is
          restricted to only one account per individual, family, household
          address, email address, telephone number, bank account and IP address.
          In all promotions, strict rules will be enforced on multiple accounts
          abuse. QQclubs.com shall in its sole discretion decide on what
          activity constitutes multiple accounts abuse.
        </p>
      </div>
    </div>
  );
}

Promotions.getLayout = QQLayout;

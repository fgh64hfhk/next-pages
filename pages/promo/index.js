import QQLayout from "@/layouts/QQLayout";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
export default function Promo() {
  const [pageData, setPageData] = useState({
    id: 0,
    isInfoDialogOpen: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const body = window.document.body;

    if (pageData.isInfoDialogOpen === true) {
      body.classList = "overflow-hidden";
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [pageData.isInfoDialogOpen]);

  return (
    <div className="w-full flex flex-col gap-y-4 bg-[#073926]">
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
            className="w-[calc((100%-2*10px)/3)] h-[334px] rounded-md overflow-hidden bg-[#092F22]"
          >
            <Card pageData={pageData} setPageData={setPageData} />
          </div>
        ))}
      </div>
      <div className="w-full rounded-2xl p-6 flex flex-col gap-2.5 bg-[#092F22]">
        <h3 className="text-white">Promotional Terms & Conditions</h3>
        <p className="text-white">
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
      <InfoDialog pageData={pageData} setPageData={setPageData} />
    </div>
  );
}

function Card({ pageData, setPageData }) {
  return (
    <div key={pageData.id} className="w-full h-full flex flex-col rounded-lg">
      <div className="aspect-[416/200] relative">
        <Image
          className="object-cover"
          src="https://placehold.co/600x400.png"
          alt="img"
          fill
          unoptimized
          priority
        />
      </div>
      <div className="h-full flex flex-col px-3 py-4">
        <h1 className="text-[#9BC9B0] font-bold">
          0.6% WEEKLY LIVE CASH REBATE - {pageData.id}
          {/* {title} - {type} */}
        </h1>
        <p className="text-[#9BC9B0] font-normal">
          Welcome bonus for QQclubs new member with 100% bonus up to MYR388!{" "}
        </p>
        <div className="w-full h-[37px] flex justify-between gap-4">
          <button
            className="w-[50%] rounded-md border border-[#18543F] text-white font-bold bg-[#092F22]"
            onClick={() =>
              setPageData((prev) => ({ ...prev, isInfoDialogOpen: true }))
            }
          >
            Detail
          </button>
          <button className="w-[50%] rounded-md border text-[#092F22] font-bold bg-[#EBA022]">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoDialog({ pageData, setPageData }) {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const modalRoot = window.document.getElementById("modal-content");
    setModalRoot(modalRoot);
  }, []);

  return modalRoot
    ? createPortal(
        <div
          className={clsx(
            "w-screen h-screen fixed top-[50%] left-[50%] transform -translate-[50%] flex justify-center items-center z-30 bg-[#00000080]",
            !pageData.isInfoDialogOpen && "hidden"
          )}
          onClick={() =>
            setPageData((prev) => ({
              ...prev,
              isInfoDialogOpen: false,
            }))
          }
        >
          <div
            className="hidden-scrollbar w-[calc(100%*0.7)] h-[calc(100%*0.7)] flex flex-col border gap-2.5 p-4 rounded-2xl text-white font-bold overflow-y-scroll relative bg-[#092F22]"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="w-[20px] h-[20px] absolute top-[16px] right-[16px]"
              onClick={() =>
                setPageData((prev) => ({
                  ...prev,
                  isInfoDialogOpen: false,
                }))
              }
            >
              X
            </span>
            <h1>0.6% WEEKLY LIVE CASH REBATE</h1>
            <p>
              QQClubs, a leading Malaysia online casino, shines as a beacon of
              excitement and opportunity in the ever-evolving online gaming
              world. As we delve into the thrilling realm of the best online
              casino sports betting, we can&apos;t help but recognize the
              importance of having the right guide by your side.
            </p>
            <p>
              We offer extensive online casino games, including blackjack and
              slot games, poker rooms, and even Las Vegas-style high roller
              experiences for those seeking that extra thrill. Its safe and
              secure platform sets us apart, offering real-time gameplay, online
              sportsbook options, and live casino events featuring live dealer
              games like blackjack and roulette.
            </p>
            <p>
              While navigating this extraordinary realm, you will encounter many
              bonuses, promotions, and payment options, such as credit cards.
              This ensures that your experience is seamless, just like playing a
              hand of video poker. The excellence of QQClubs extends beyond its
              games, with exceptional customer service and 24/7 customer support
              through live chat, guaranteeing that you&apos;re never alone in
              your online gambling journey. So, fasten your seatbelts and embark
              on an adventure as we explore how we can transform your betting
              experience and elevate your chances of success in online sports
              betting and casino gaming
            </p>
          </div>
        </div>,
        modalRoot
      )
    : "";
}

Promo.getLayout = QQLayout;

import { useState } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import RootLayout from "@/layouts/RootLayout";

const DAY_OPTIONS = ["TD", "3D", "7D", "1M", "3M"];

const OPTIONS = [
  { value: "a", name: "a1" },
  { value: "b", name: "b1" },
  { value: "c", name: "c1" },
  { value: "d", name: "d1" },
  { value: "e", name: "e1" },
];

const PROVIDERS = [
  {
    id: 1,
    code: "aaa",
    name: "Alpha Gaming",
    index: "aaa#aaa",
    image: "https://dummy.img/alpha.png",
  },
  {
    id: 2,
    code: "bbb",
    name: "Beta Play",
    index: "bbb#bbb",
    image: "https://dummy.img/beta.png",
  },
  {
    id: 3,
    code: "ccc",
    name: "Cosmos Casino",
    index: "ccc#ccc",
    image: "https://dummy.img/cosmos.png",
  },
  {
    id: 4,
    code: "ddd",
    name: "Delta Entertainment",
    index: "ddd#ddd",
    image: "https://dummy.img/delta.png",
  },
  {
    id: 5,
    code: "eee",
    name: "Epsilon Studio",
    index: "eee#eee",
    image: "https://dummy.img/epsilon.png",
  },
  {
    id: 6,
    code: "fff",
    name: "Fantasy Games",
    index: "fff#fff",
    image: "https://dummy.img/fantasy.png",
  },
  {
    id: 7,
    code: "ggg",
    name: "Galaxy Slots",
    index: "ggg#ggg",
    image: "https://dummy.img/galaxy.png",
  },
  {
    id: 8,
    code: "hhh",
    name: "Hero Gaming",
    index: "hhh#hhh",
    image: "https://dummy.img/hero.png",
  },
  {
    id: 9,
    code: "iii",
    name: "Infinity Play",
    index: "iii#iii",
    image: "https://dummy.img/infinity.png",
  },
  {
    id: 10,
    code: "jjj",
    name: "Jupiter Games",
    index: "jjj#jjj",
    image: "https://dummy.img/jupiter.png",
  },
];

const PRODUCTS = [
  {
    key: "sports",
    name: "Sports",
  },
  {
    key: "casino",
    name: "Live Casino",
  },
  {
    key: "slot",
    name: "Slot",
  },
  {
    key: "lottery",
    name: "Lottery",
  },
  {
    key: "poker",
    name: "Poker",
  },
  {
    key: "fish",
    name: "Fishing Games",
  },
  {
    key: "arcade",
    name: "Arcade",
  },
  {
    key: "esport",
    name: "E-Sports",
  },
  {
    key: "keno",
    name: "Keno",
  },
  {
    key: "virtual",
    name: "Virtual Games",
  },
];

const RECORD_CONDITION_LIST = {
  A: {
    name: "A",
    f: [
      {
        condition: "Status",
        options: OPTIONS,
      },
    ],
  },
  B: {
    name: "B",
    f: [
      {
        condition: "Status",
        options: OPTIONS,
      },
    ],
  },
  C: {
    name: "C",
    f: [
      {
        condition: "providers",
        options: [
          {
            value: "all",
            name: "all",
          },
          ...PROVIDERS.map((v) => ({
            value: v.code,
            name: v.name,
          })),
        ],
      },
      {
        condition: "products",
        options: [
          {
            value: "all",
            name: "all",
          },
          ...PRODUCTS.map((v) => ({
            value: v.code,
            name: v.name,
          })),
        ],
      },
    ],
  },
  D: {
    name: "D",
    f: [
      {
        condition: "Status",
        options: OPTIONS,
      },
    ],
  },
  ...(true
    ? {
        E: {
          name: "E",
          f: [
            {
              condition: "Status",
              options: OPTIONS,
            },
          ],
        },
        F: {
          name: "F",
          f: [
            {
              condition: "Status",
              options: OPTIONS,
            },
          ],
        },
      }
    : {}),
};

const record = {
  id: "TX123456",
  user: "Alice",
  amount: 1500.75,
  currency: "USD",
  method: "Credit Card",
  txid: "0x98af...123",
  note: "Payment for September invoice",
  status: "completed",
  time: "2025-09-22T10:15:00Z",
};

export default function Records({ nowISO }) {
  const [tab, setTab] = useState("A");

  const [value, setValue] = useState(dayjs("2025-09-22"));

  return (
    // root
    <div className="w-full h-full flex flex-col gap-y-2 bg-amber-500">
      {/* Title */}
      <div className="flex flex-col gap-2 p-4 bg-amber-300">
        <h2 className="text-[24px] text-black font-bold">Record</h2>
        <p className="text-[18px] text-black font-semiboldbold">Note_Record</p>
      </div>

      {/* Main */}
      <div className="flex flex-col gap-y-3 p-4 bg-amber-300">
        {/* 篩選列容器 */}
        <div className="w-full flex gap-2">
          {/* 交易類型選擇器（Select） */}
          <div className="w-full">
            <InputLabel>Transaction Type:</InputLabel>
            <Select
              defaultValue={tab}
              onChange={(e) => setTab((prev) => e.target.value)}
              sx={{
                minWidth: 200,
              }}
            >
              {Object.entries(RECORD_CONDITION_LIST).map(
                ([key, value], idx) => (
                  <MenuItem key={idx} value={key}>
                    {value.name}
                  </MenuItem>
                )
              )}
            </Select>
          </div>
          {/* 動態條件群（map） */}
          {RECORD_CONDITION_LIST[tab].f.map((item, idx) => (
            <div key={idx} className="w-full">
              <InputLabel>{item.condition}</InputLabel>
              <Select
                defaultValue={RECORD_CONDITION_LIST[tab].f[0].options[0].value}
                sx={{
                  minWidth: 200,
                }}
              >
                {item.options.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          ))}

          {/* 起始時間（DateTimePicker） */}
          <div className="w-full">
            <InputLabel>From:</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  "& .MuiPickersInputBase-root": { width: "200px" },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* 結束時間（DateTimePicker） */}
          <div className="w-full">
            <InputLabel>To:</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  "& .MuiPickersInputBase-root": { width: "200px" },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>

        {/* 快速日期選項（Day chips） */}
        <div className="flex items-center gap-x-3">
          {DAY_OPTIONS.map((d, i) => (
            <button key={i} className="p-3">
              {d}
            </button>
          ))}
        </div>
        {/* 紀錄列表區（Records） */}
        <div className="flex flex-col gap-2">
          {/* 單筆卡片（RecordCard） */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="w-full flex flex-col border">
              {/* time and status */}
              <div className="w-full flex justify-between items-center p-4">
                <span>{nowISO}</span>
                <span>status</span>
              </div>
              {/* contents */}
              <div className="w-full flex flex-wrap p-4 gap-3">
                {Object.entries(record)
                  .filter(([key]) => !["status", "time", "txid"].includes(key))
                  .map(([key, value], idx) => (
                    <div
                      key={idx}
                      className="w-[calc(100%/4)] flex items-center gap-x-2"
                    >
                      <span>{key.toUpperCase()}：</span>
                      <span>{value}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* total receive */}
        <div className="w-full flex justify-between items-center">
          <div>Total Deposit:</div>
          <div>$ 0.00</div>
        </div>

        {/* divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* pagination */}
        <div className="mx-auto">
          <nav className="w-full flex items-center gap-x-2">
            <button className="w-[30px] h-[30px] flex justify-center items-center border">
              左
            </button>
            <div className="flex items-center gap-x-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <button
                  key={idx}
                  className="w-[30px] h-[30px] flex justify-center items-center border"
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button className="w-[30px] h-[30px] flex justify-center items-center border">
              右
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      nowISO: new Date().toISOString(),
    },
  };
}

Records.getLayout = RootLayout;

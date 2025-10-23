import { useState, useMemo } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { InputLabel, Select, MenuItem } from "@mui/material";

import providers from "@/mock/providers";
import products from "@/mock/products";

import RootLayout from "@/layouts/RootLayout";
import QQLayout from "@/layouts/QQLayout";
import dayjs from "dayjs";
import DatePickerField from "@/components/date_picker_field";

const DAY_OPTIONS = ["TD", "3D", "7D", "1M", "3M"];

const STATUS_MAP = {
  New: "var(--border-info)",
  Processing: "var(--border-warning)",
  Success: "var(--border-success)",
  Approved: "var(--border-success)",
  Rejected: "var(--border-error)",
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
  const [pageData, setPageData] = useState({
    tab: "deposit",
    day: "TD",
    startTime: dayjs().startOf("day"),
    endTime: dayjs().endOf("day"),
    selectedTime: [],
    status: "all",
    type: "all",
    providers: "all",
    products: "all",
    records: [],
    total_receive: [],
    currentPage: 1,
    total: 0,
    per_page: 0,
    last_page: 0,
  });

  const STATUS_OPTIONS = useMemo(
    () => [
      { value: "all", name: "all" },
      { value: "new", name: "new" },
      { value: "processing", name: "processing" },
      { value: "approved", name: "approved" },
      { value: "rejected", name: "rejected" },
    ],
    []
  );

  const BONUS_TYPE_OPTIONS = useMemo(
    () => [
      { value: "all", name: "all" },
      { value: "promo", name: "promo" },
      { value: "reward", name: "reward" },
      { value: "vip", name: "vip" },
      { value: "mission", name: "mission" },
    ],
    []
  );

  const REBATE_TYPE_OPTIONS = useMemo(
    () => [
      { value: "all", name: "all" },
      { value: "daily", name: "daily" },
      { value: "weekly", name: "weekly" },
    ],
    []
  );

  const RECORD_CONDITION_LIST = useMemo(
    () => ({
      deposit: {
        name: "deposit",
        filters: [{ condition: "status", options: STATUS_OPTIONS }],
      },
      withdraw: {
        name: "withdraw",
        filters: [{ condition: "status", options: STATUS_OPTIONS }],
      },
      bets: {
        name: "bets",
        filters: [
          {
            condition: "providers",
            options: [
              { value: "all", name: "all" },
              ...providers.map((v) => ({
                value: v.index,
                name: v.name,
              })),
            ],
          },
          {
            condition: "products",
            options: [
              { value: "all", name: "all" },
              ...products.map((v) => ({
                value: v.key,
                name: v.name,
              })),
            ],
          },
        ],
      },
      bonus: {
        name: "bonus",
        filters: [{ condition: "type", options: BONUS_TYPE_OPTIONS }],
      },
      refer: {
        name: "refer",
        filters: [],
      },
      rebate: {
        name: "rebate",
        filters: [{ condition: "type", options: REBATE_TYPE_OPTIONS }],
      },
    }),
    [BONUS_TYPE_OPTIONS, REBATE_TYPE_OPTIONS, STATUS_OPTIONS]
  );

  return (
    // root
    <div className="w-full h-full flex flex-col gap-y-2">
      {/* Title */}
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-[24px] text-black font-bold">Record</h2>
        <p className="text-[18px] text-black font-semiboldbold">Note_Record</p>
      </div>

      {/* Main */}
      <div className="flex flex-col gap-y-3 p-4">
        {/* 篩選列容器 */}
        <div className="w-full flex gap-2">
          {/* 交易類型選擇器（Select） */}
          <div className="w-full">
            <InputLabel>Transaction Type:</InputLabel>
            <Select
              defaultValue={pageData.tab}
              onChange={(e) => setPageData((prev) => ({ ...prev, tab: e.target.value}))}
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
          {RECORD_CONDITION_LIST[pageData.tab].filters.map((item, idx) => (
            <div key={idx} className="w-full">
              <InputLabel>{item.condition}</InputLabel>
              <Select
                defaultValue={
                  RECORD_CONDITION_LIST[pageData.tab].filters[0].options[0].value
                }
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

          <div className="w-full">
            <DatePickerField />
          </div>

          {/* 起始時間（DateTimePicker） */}
          <div className="w-full">
            <InputLabel>From:</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={pageData.startTime}
                onChange={(newValue) => setPageData((prev) => ({ ...prev, startTime: newValue}))}
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
                value={pageData.endTime}
                onChange={(newValue) => setPageData((prev) => ({ ...prev, endTime: newValue}))}
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

Records.getLayout = QQLayout;

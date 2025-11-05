import CardTable from "@/components/CardTable";
import QQLayout from "@/layouts/QQLayout";

import { useState } from "react";

const sampleData = [
  { id: 1, name: "Alice", age: 30, status: "Active" },
  { id: 2, name: "Bob", age: 25, status: "Inactive" },
  { id: 3, name: "Charlie", age: 35, status: "Active" },
];

const sampleColumns = [
  { key: "id", label: "ID", width: "50px", sortable: true, align: "center" },
  { key: "name", label: "姓名", sortable: true },
  { key: "age", label: "年齡", sortable: true, align: "right" },
  {
    key: "status",
    label: "狀態",
    renderer: (value) => (
      <span style={{ color: value === "Active" ? "green" : "red" }}>
        {value}
      </span>
    ),
  },
];

export default function PayoutTable() {
  // 示範 Controlled 模式：外部管理排序狀態
  const [currentSort, setCurrentSort] = useState({
    key: "name",
    direction: "asc",
  });

  return (
    <div className="w-full h-[100dvh]">
      <h2>簡易 CardTable 示範</h2>
      <CardTable />
    </div>
  );
}
PayoutTable.getLayout = QQLayout;

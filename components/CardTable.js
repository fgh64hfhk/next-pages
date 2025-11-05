export default function CardTable({
  title = "資料列表",
  columns,
  data,
  loading = false,
  emptyMessage = "無資料",
  // Controlled Props (可被外部控制)
  sortSpec: controlledSortSpec,
  selectedRowKey: controlledSelectedRowKey,
  // Callbacks
  onSortChange,
  onRowSelect,
  // 視覺外觀
  cardStyle = {},
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        overflow: "hidden", // 確保邊緣整潔
        ...cardStyle,
      }}
    >
      {/* Card Header (標題與工具列) */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #eee",
          backgroundColor: "#f7f7f7",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.1em" }}>{title}</h3>
        {/* 此處為 Toolbar 插槽 (例如：篩選按鈕) */}
        <div style={{ fontSize: "0.9em", color: "#555" }}>
          {sortedData.length} 筆資料
        </div>
      </div>

      {/* Table Body */}
      <div style={{ overflowX: "auto" }}>{content}</div>

      {/* 此處為 Pagination / Footer 插槽 */}
      {/* (略過簡易示範的分頁組件) */}
    </div>
  );
}

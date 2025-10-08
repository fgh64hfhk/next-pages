// server-basic.js
import { createServer } from "http";

const hostname = "127.0.0.1"; // localhost
const port = 3000;

// 1. 建立伺服器實例，並傳入處理請求的函式
const server = createServer((req, res) => {
  // 設定 HTTP 狀態碼 (200 OK)
  res.statusCode = 200;

  // 設定回應標頭 (Content-Type: text/plain)
  res.setHeader("Content-Type", "text/plain");

  // 結束回應，並傳送內容
  res.end("Hello World from Node.js Native HTTP Server\n");
});

// 2. 啟動伺服器並監聽特定埠號
server.listen(port, hostname, () => {
  console.log(`伺服器運行在 http://${hostname}:${port}/`);
});

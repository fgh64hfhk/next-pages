// try {
//   const p = await new Promise((res, rej)=>{rej()})
//   console.log(p)
// } catch (error) {
//   console.log("ERROR:", error)
// }

// 模擬非同步延遲
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 步驟 1: 模擬登入，總是成功
function step1_login(user) {
  return new Promise((resolve, reject) => {
    console.log(`[Step 1] 嘗試登入用戶: ${user}`);
    delay(500).then(() => {
      if (user) {
        console.log("[Step 1] 登入成功。");
        resolve({ token: "abc-123", username: user }); // 成功，傳遞資料
      } else {
        // 實際上，這個步驟通常不會失敗，除非網路異常
        reject(new Error("登入失敗：用戶名為空。"));
      }
    });
  });
}

// 步驟 2: 模擬取得使用者 ID，故意讓它失敗
function step2_getUserId(authInfo) {
  return new Promise((resolve, reject) => {
    console.log("[Step 2] 嘗試取得用戶 ID...");
    delay(300).then(() => {
      // 🚨 模擬錯誤：如果 token 是 'abc-123' 就拒絕 (reject)
      if (authInfo.token !== "abc-123") {
        console.error("[Step 2] 🚨 發現無效 token，拒絕！");
        // 使用 reject 拋出錯誤
        reject(new Error("授權失敗 (Token 無效)"));
      } else {
        console.log("[Step 2] 取得 ID 成功。");
        resolve({ ...authInfo, id: 9527 });
      }
    });
  });
}

// 步驟 3: 模擬取得使用者資料
function step3_getUserData(userInfo) {
  return new Promise((resolve, reject) => {
    console.log(`[Step 3] 嘗試取得用戶 ${userInfo.id} 的資料...`);
    delay(700).then(() => {
      console.log("[Step 3] 取得資料成功。");
      resolve({
        username: userInfo.username,
        id: userInfo.id,
        email: `${userInfo.username}@example.com`,
      });
    });
  });
}

// ============== 執行 Promise 鏈 ==============

console.log("--- 程式開始執行 ---");

const p = await step1_login("Chris")
  // 成功時，資料從上一個 resolve 傳遞到下一個 then
  .then((authInfo) => {
    // 如果 step2 失敗，程式會跳過後續的 then，直接進入 catch
    return step2_getUserId(authInfo);
  })
  // 雖然 step2 失敗了，但如果我們沒有 catch，這段程式碼會被跳過
  .then((userInfo) => {
    console.log("[Chain] 這是被跳過的部分，因為 step2 失敗了。");
    return step3_getUserData(userInfo);
  })

  // 集中錯誤處理：
  // 鏈結中任何一個 Promise (step1, step2, step3) 發生 reject，
  // 都會被這個單一的 .catch() 捕捉到。
  .catch((error) => {
    console.log("--- 捕捉到錯誤 ---");
    console.error(`[Error Handler] 錯誤訊息: ${error.message}`);
    console.log("--- 程式執行終止 ---");
  });

console.log("result:", p);

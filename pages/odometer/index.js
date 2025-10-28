import QQLayout from "@/layouts/QQLayout";
import { useEffect, useRef, useCallback } from "react";

export default function OdometerDemo({ initial = 7000 }) {
  const elRef = useRef(null); // 綁定到 <h1>
  const countUpRef = useRef(null); // 保存 CountUp 實例
  const modulesLoadedRef = useRef(false); // 只載入一次

  // 初始化（只在 client 執行）
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    let mounted = true;

    async function init() {
      if (modulesLoadedRef.current) return;

      try {
        const countUpModule = await import("countup.js");
        const odometerModule = await import("odometer_countup");

        if (!mounted) return;

        // 建立 CountUp 實例並儲存到 ref
        countUpRef.current = new countUpModule.CountUp(elRef.current, initial, {
          plugin: new odometerModule.Odometer({
            // duration: 5,
            lastDigitDelay: 0,
          }),
          duration: 5,
        });

        modulesLoadedRef.current = true;

        if (!countUpRef.current.error) {
          countUpRef.current.start();
        } else {
          console.error("CountUp init error:", countUpRef.current.error);
        }
      } catch (err) {
        console.error("Failed to load countup or odometer plugin:", err);
      }
    }

    init();

    return () => {
      // cleanup
      mounted = false;
      if (countUpRef.current) {
        // 若實例有 reset() 就呼叫它，然後清掉 ref
        try {
          if (typeof countUpRef.current.reset === "function") {
            countUpRef.current.reset();
          }
        } catch (e) {
          // 忽略清理錯誤
        }
        countUpRef.current = null;
      }
    };
  }, [initial]);

  // 重新播放（reset + start）
  const replay = useCallback(() => {
    const inst = countUpRef.current;
    if (!inst) return;
    if (typeof inst.reset === "function") inst.reset();
    if (typeof inst.start === "function") inst.start();
  }, []);

  // 更新數值（若 CountUp 支援 update）
  const updateValue = useCallback((newVal) => {
    const inst = countUpRef.current;
    if (!inst) return;
    // 若有 update(newVal) 方法就用它，否則 reset->建新實例或 start from new
    if (typeof inst.update === "function") {
      inst.update(newVal);
    } else {
      // fallback: reset DOM content then start a fresh animation by re-creating instance
      try {
        inst.reset && inst.reset();
      } catch {}
      // 簡單作法：直接改 innerText（不會動畫）
      if (elRef.current) elRef.current.innerText = String(newVal);
    }
  }, []);

  return (
    <div>
      <h1
        ref={elRef}
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => {
          // 點擊重播
          replay();
        }}
      >
        0
      </h1>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => {
            replay();
          }}
        >
          Replay
        </button>

        <button
          onClick={() => {
            // 範例：更新到一個新的隨機數
            const newVal = Math.floor(Math.random() * 10000);
            updateValue(newVal);
          }}
          style={{ marginLeft: 8 }}
        >
          Update (random)
        </button>
      </div>

      <p>CountUp with React (optimized)</p>
    </div>
  );
}

OdometerDemo.getLayout = QQLayout;

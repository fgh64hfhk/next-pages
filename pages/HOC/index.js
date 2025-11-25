import withDebounce from "@/components/withDebounce";
import QQLayout from "@/layouts/QQLayout";
import { Input } from "@mui/material";

export default function HOC() {
  const DebounceInput = withDebounce({ message: "防抖攔截", delay: 3000 })(
    Input
  );

  return (
    <div className="w-full">
      <DebounceInput onChange={(e) => console.log("真正觸發:", e.target.value)} />
    </div>
  );
}

HOC.getLayout = QQLayout;

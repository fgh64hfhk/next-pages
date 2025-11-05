import QQLayout from "@/layouts/QQLayout";
import PayoutCard from "@/components/PayoutCard"

export default function PayoutTable() {
  return (
    <div className="w-full h-[100dvh]">
      <PayoutCard />
    </div>
  );
}
PayoutTable.getLayout = QQLayout;

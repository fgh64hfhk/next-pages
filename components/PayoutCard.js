import clsx from "clsx";

const columns = [
  {
    name: "Big(RM)",
    ticket_prize: "big",
    "1st_prize": "big_1000",
    "2nd_prize": "big_2000",
    "3rd_prize": "big_3000",
    starter: "big_start",
    consolation: "big_consolation",
  },
  {
    name: "Small(RM)",
    ticket_prize: "small",
    "1st_prize": "small_1000",
    "2nd_prize": "small_2000",
    "3rd_prize": "small_3000",
    starter: "small_start",
    consolation: "small_consolation",
  },
  {
    name: "4A(RM)",
    ticket_prize: "4a",
    "1st_prize": "4a_1000",
    "2nd_prize": "4a_2000",
    "3rd_prize": "4a_3000",
    starter: "4a_start",
    consolation: "4a_consolation",
  },
];

const table_header = columns.map((col) => col.name);
table_header.unshift("Prize Type");
console.log(table_header);

const ticket_prize = columns.map((col) => col.ticket_prize);
ticket_prize.unshift("Ticket Prize");
console.log(ticket_prize);

const first_prize = columns.map((col) => col["1st_prize"]);
console.log(ticket_prize);

const second_prize = columns.map((col) => col.ticket_prize);
console.log(ticket_prize);

const third_prize = columns.map((col) => col.ticket_prize);
console.log(ticket_prize);

const starter = columns.map((col) => col.ticket_prize);
console.log(ticket_prize);

const consolation = columns.map((col) => col.ticket_prize);
console.log(ticket_prize);

export default function PayoutCard() {
  return (
    <div className="w-full flex flex-col gap-2 rounded-xl shadow-[0_2.42px_4.83px_0_#00000059] bg-[#092F22] overflow-hidden">
      <h1
        className={clsx(
          "w-full border-b border-[#18543E] p-[12px] bg-[#18543E]",
          "text-xl font-bold text-white text-center"
        )}
      >
        4D Winning Prize
      </h1>

      <div
        className={clsx(
          "flex",
          "border-b border-[#18543E] p-[12px]",
          "text-xl font-bold text-white text-start"
        )}
      >
        {table_header.map((header, idx) => (
          <div key={idx} className="w-[calc(100%/4)]">
            {header}
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "flex",
          "border-b border-[#18543E] p-[12px]",
          "text-xl font-bold text-white text-start"
        )}
      >
        {ticket_prize.map((header, idx) => (
          <div key={idx} className="w-[calc(100%/4)]">
            {header}
          </div>
        ))}
      </div>
    </div>
  );
}

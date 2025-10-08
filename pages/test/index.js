import RootLayout from "@/layouts/RootLayout";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Parent() {
  const [id, setId] = useState(0);

  useLayoutEffect(() => {
    console.log("Parent: useLayoutEffent");
    return () => console.log("Parent: useLayoutEffent");
  }, []);
  useEffect(() => {
    console.log("Parent: useEffent");
    return () => console.log("Parent: useEffent");
  }, [id]);
  return (
    <div className="w-full h-[100dvh] flex justify-center items-center gap-1 bg-amber-50">
      <h1>Parent Content</h1>
      <button
        className="bg-black text-white cursor-pointer"
        onClick={() => setId((prev) => prev + 1)}
      >
        Set ID
      </button>
      <Child value={id} />
    </div>
  );
}

function Child({ value }) {
  useLayoutEffect(() => {
    console.log("Child: useLayoutEffent");
    return () => console.log("Child: useLayoutEffent");
  }, []);
  useEffect(() => {
    console.log("Child: useEffent");
    return () => console.log("Child: useEffent");
  }, []);
  return <div>Child Content: {value}</div>;
}

Parent.getLayout = RootLayout;

"use client";
import { useStore } from "../stores/userStore";
export default function Home() {
  const { font, setFont } = useStore();
  return (
    <div>
      <h1 className="text-red-600 text-2xl text-center mt-5">سلام</h1>
      <button
        onClick={() => {
          if (font === "font-v") {
            setFont("font-p");
          } else {
            setFont("font-v");
          }
        }}
        className="flex justify-center items-center bg-white shadow-xl shadow-[#0000003c] rounded-lg border-[1px] border-slate-200 p-5 cursor-pointer mx-auto"
      >
        Change Font
      </button>
    </div>
  );
}

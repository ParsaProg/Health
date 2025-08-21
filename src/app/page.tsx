"use client";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-600 text-2xl text-center mt-5">سلام</h1>
      <button
        onClick={() => {
          if (document.body.classList.value === "font-v") {
            document.body.classList.add("font-p");
            document.body.classList.remove("font-v");
          }
          else if (document.body.classList.value === "font-p") {
            document.body.classList.remove("font-p");
            document.body.classList.add("font-v");
          }
          else{
            document.body.classList.add("font-v");
          }
          console.log(document.body.classList.value)
        }}
        className="flex justify-center items-center bg-white shadow-xl shadow-[#0000003c] rounded-lg border-[1px] border-slate-200 p-5 cursor-pointer mx-auto"
      >
        Change Font
      </button>
    </div>
  );
}

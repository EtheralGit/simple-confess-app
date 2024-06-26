"use client";
import { useState } from "react";

export default function Home() {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [count, setCount] = useState(0);

  const moveButton = () => {
    setCount((prev) => prev + 1);
    let newTop, newLeft;
    const minDistance = 20; // 10 rem in pixels

    do {
      newTop = Math.floor(Math.random() * 300) - 100;
      newLeft = Math.floor(Math.random() * 300) - 100;
    } while (Math.abs(newTop - buttonPosition.top) < minDistance);

    setButtonPosition({ top: newTop, left: newLeft });
  };
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/cat-2.gif" alt="cat" className="sm:w-72 w-36 mb-4" />
        <h1 className="text-gray-900 font-medium text-2xl px-2">
          Are youu sureeeeeeee :(?
        </h1>
        <div className="flex items-center gap-8 mt-8">
          <a
            href="/yey"
            className="bg-gray-700 text-white sm:px-7 py-3 px-5 select-none rounded-lg sm:text-lg text-sm tracking-wider hover:opacity-90 active:scale-95 duration-100"
          >
            jk, i love you too.
          </a>
          <a
            href={count >11 ? "/yey" : undefined}
            onMouseEnter={count === 12 ? undefined : moveButton}
            onClick={count > 11 ? undefined : moveButton}
            style={{
              transform: `translate(${buttonPosition.left}px, ${buttonPosition.top}px)`,
            }}
            className={`${
              count === 12 ? "bg-orange-500" : "bg-gray-700 "
            } text-white sm:px-7 py-3 px-5 select-none rounded-lg sm:text-lg text-sm tracking-wider hover:opacity-90 active:scale-90 duration-100 cursor-pointer`}
          >
            {count === 12 ? "I LOVE YOU TOO" : "im fucking sure"}
          </a>
        </div>
      </div>
    </main>
  );
}

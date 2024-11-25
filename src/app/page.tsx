"use client";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);

  function handleCount() {
    if (count < 1000) {
      setCount(count + 1);
    }
  }

  function handleMin() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function restartCounter() {
    setCount(0);
  }

  function x2() {
    setCount(count * 2);
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
        <h1>Count is : {count}</h1>
        <div className="flex justify-between gap-5 mr-auto">
          <button onClick={handleCount}>+</button>
          <button onClick={handleMin}>-</button>
        </div>
        <div className="flex flex-col mr-auto">
          <button onClick={restartCounter}>Reset Counter</button>
          <button onClick={x2}>Count number x2 </button>
          <input
            className="text-black"
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

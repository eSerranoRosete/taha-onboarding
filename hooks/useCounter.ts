import { useState } from "react";

export const useCounter = (max: number) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => (c < max ? c + 1 : c));
  }

  function decrement() {
    setCount((c) => (c > 0 ? c - 1 : c));
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
};

import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      console.log(i);
      setCount(i);
      i++;
    }, 1000);

    // clean-up function - unmount işlemi
    return () => {
      clearInterval(interval);
      console.log("ekrandan kaldırıldığında!");
    };
  }, []);

  return <div className="timer">Sayım: {count}</div>;
};

export default Timer;

import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="counter">
      <button>+</button>
      <strong>{count}</strong>
      <button>-</button>
    </div>
  );
};

export default Counter;

import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "../redux/slices/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="counter">
      <button onClick={() => dispatch(arttir())}>+</button>
      <strong>{count}</strong>
      <button onClick={() => dispatch(azalt())}>-</button>
    </div>
  );
};

export default Counter;

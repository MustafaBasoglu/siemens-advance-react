import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [isShowTimer, setIsShowTimer] = useState(true);
  
  return (
    <div className="app">
      <button onClick={() => setIsShowTimer(true)}>Open Timer</button>
      {isShowTimer && <Timer />}
      <button onClick={() => setIsShowTimer(false)}>Close Timer</button>
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
1- Ekranda değişikliği göstermek istiyorsak ilgili componentin state'ini değiştirmemiz gerekiyor.
2- Componentin re-render işlemi için state ve props değişmesi lazım.
*/

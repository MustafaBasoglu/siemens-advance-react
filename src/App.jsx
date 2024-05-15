import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
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

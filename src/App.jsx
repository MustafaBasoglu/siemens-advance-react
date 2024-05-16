import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
     const router = createBrowserRouter([
      {
         path: "/",
         element: <HomePage />
      }
     ]);
  return (
    <div className="app">
      <RouterProvider router={router}  />
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
1- Ekranda değişikliği göstermek istiyorsak ilgili componentin state'ini değiştirmemiz gerekiyor.
2- Componentin re-render işlemi için state ve props değişmesi lazım.
*/

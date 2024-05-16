import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
  ]);
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
1- Ekranda değişikliği göstermek istiyorsak ilgili componentin state'ini değiştirmemiz gerekiyor.
2- Componentin re-render işlemi için state ve props değişmesi lazım.
*/

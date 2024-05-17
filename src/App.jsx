import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/404Page";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/products/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
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

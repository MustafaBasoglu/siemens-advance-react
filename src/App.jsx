import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainRoutes } from "./routes/MainRoutes";
import { adminRoutes } from "./routes/AdminRoutes";

function App() {
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
 {
          path: "/admin",
          element: (
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          ),
        },
*/

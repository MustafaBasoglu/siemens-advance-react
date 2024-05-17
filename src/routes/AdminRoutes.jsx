import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/404Page";
import AdminPage from "../pages/admin/AdminPage";
import SettingsPage from "../pages/admin/SettingsPage";
import UsersPage from "../pages/admin/UsersPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "/admin/users",
        element: <UsersPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
];

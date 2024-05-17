import { Suspense, lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/404Page";

const AdminPage = lazy(() => import("../pages/admin/AdminPage"));
const SettingsPage = lazy(() => import("../pages/admin/SettingsPage"));
const UsersPage = lazy(() => import("../pages/admin/UsersPage"));

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "/admin/settings",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
];

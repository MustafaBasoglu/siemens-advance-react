import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="mt-10">
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Dashboard
          </a>
          <Link
            to="users"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Users
          </Link>
          <Link
            to="settings"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 text-black">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

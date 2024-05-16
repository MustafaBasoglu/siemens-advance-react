import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="p-3">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

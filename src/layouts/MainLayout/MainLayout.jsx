import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-black ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;

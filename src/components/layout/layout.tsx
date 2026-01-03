import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { PageTransition } from "../page-transition";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        {/* <AnimatePresence mode="wait"> */}
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        {/* </AnimatePresence> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

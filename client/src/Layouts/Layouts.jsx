import Footer from "./Footer";
import Navbar from "./Navbar";
import ShoppingCart from "../components/ShoppingCart";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ShoppingCart />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

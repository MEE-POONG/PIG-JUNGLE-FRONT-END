import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Product from "../Product";
import Footer from "../Footers/Footer";

export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <About/>
      <Product/>
        {children}
        {/* <Footer/> */}
    </>
  );
}

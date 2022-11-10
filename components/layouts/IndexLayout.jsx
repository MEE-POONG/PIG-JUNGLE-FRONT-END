import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
<<<<<<< HEAD
// import Product from "../Product";
=======
>>>>>>> 8e480bc0a56053162226693d821c244562d296b5
import Footer from "../Footers/Footer";
import Productpage from "../Product/Product";

export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <About/>
<<<<<<< HEAD
     
      {/* <Product/> */}
=======

      
>>>>>>> 8e480bc0a56053162226693d821c244562d296b5
        {children}
        {/* <Footer/> */}
    </>
  );
}

import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
<<<<<<< HEAD
=======


>>>>>>> d011ca9a7381aeebcf1705f1efd5a79bf78b04b1
import Footer from "../Footers/Footer";
import Loginpage from "../Login/Login";
import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";



export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <About/>
<<<<<<< HEAD
=======

>>>>>>> d011ca9a7381aeebcf1705f1efd5a79bf78b04b1
        {children}
        {/* <Footer/> */}
    </>
  );
}
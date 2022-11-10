import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";

<<<<<<< HEAD
=======
import Footer from "../Footers/Footer";

>>>>>>> dd47047dde0b51b2922d1731c187a474b71efca0
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

     
      {/* <Product/> */}

=======
>>>>>>> dd47047dde0b51b2922d1731c187a474b71efca0
        {children}
    
    </>
  );
}
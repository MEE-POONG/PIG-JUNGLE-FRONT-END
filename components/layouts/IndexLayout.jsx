import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Addressrpage from "../Address/Address";
import Contactpage from "../Contact/Contact";

import Footer from "../Footers/Footer";
import Loginpage from "../Login/Login";
import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";



export default function IndexLayout({ children }) {
  return (
    <>
   
     
      {/* <Product/> */}

        {children}

        {/* <Footer/> */}
   </>
  

  );
}
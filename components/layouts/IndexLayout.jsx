import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Contactpage from "../Contact/Contact";


<<<<<<< HEAD

import Footer from "../Footers/Footer";
=======
// import Footer from "../Footers/Footer";
>>>>>>> 5e37d3a2b73e0a9414c5627559a8b05ae28ad365
import Loginpage from "../Login/Login";
import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";
import Cart from "../Cart/Cart";


export default function IndexLayout({ children }) {
  return (
    <>
<<<<<<< HEAD
      <IndexNavbar />
      {/* <About/> */}
      <Cart/>
=======
      <IndexNavbar/>
      <Productpage/>
      <Contactpage/>
      <About/>


     
      {/* <Product/> */}



<<<<<<< HEAD
=======
>>>>>>> 37397f04a995f5604a58bf027462fdd24a4ddabd
>>>>>>> 5e37d3a2b73e0a9414c5627559a8b05ae28ad365
        {children}

        {/* <Footer/> */}
   </>
  

  );
}
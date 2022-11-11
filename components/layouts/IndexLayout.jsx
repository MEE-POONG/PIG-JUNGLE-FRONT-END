import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Contactpage from "../Contact/Contact";


// import Footer from "../Footers/Footer";
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



>>>>>>> 37397f04a995f5604a58bf027462fdd24a4ddabd
        {children}

        {/* <Footer/> */}
   </>
  

  );
}
import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Contactpage from "../Contact/Contact";

<<<<<<< HEAD


=======
>>>>>>> 6d3a893c5ee820a937c986a62105225468eeb35b
import Footer from "../Footers/Footer";
import Loginpage from "../Login/Login";
import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";



export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar/>
      <Productpage/>
      <Contactpage/>
      <About/>
<<<<<<< HEAD
=======


     
      {/* <Product/> */}



>>>>>>> 6d3a893c5ee820a937c986a62105225468eeb35b
        {children}

        {/* <Footer/> */}
   </>
  

  );
}
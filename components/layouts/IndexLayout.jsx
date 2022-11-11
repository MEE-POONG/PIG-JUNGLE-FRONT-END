import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Contactpage from "../Contact/Contact";



import Footer from "../Footers/Footer";
import ImageSider from "../ImageSlider/ImageSider";
// import Footer from "../Footers/Footer";
import Loginpage from "../Login/Login";
import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";
import Cart from "../Cart/Cart";


export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <ImageSider/>
      <Productpage/>
      <Contactpage/>


     
      {/* <Product/> */}



        {children}

        {/* <Footer/> */}
   </>
  

  );
}
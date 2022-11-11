import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
import Addressrpage from "../Address/Address";
import Contactpage from "../Contact/Contact";



import Footer from "../Footers/Footer";
import ImageSider from "../ImageSlider/ImageSider";
// import Footer from "../Footers/Footer";
import Loginpage from "../Login/Login";
// import Productpage from "../Product/Product";
import Registerpage from "../Register/Register";

import Cart1 from "../Cart/Cart1";
import CheckListpage from "@/pages/CheckList";


export default function IndexLayout({ children }) {
  return (
    <>

      <IndexNavbar />
      {/* <About/> */}
      <Cart/>
      <IndexNavbar/>
      <IndexNavbar />
      <ImageSider/>
      <Productpage/>
      <Contactpage/>


     
      {/* <About/> */}


      {/* <IndexNavbar /> */}
      {/* <Productpage /> */}
      {/* <Cart1 /> */}
      {/* <Contactpage />
      <About /> */}
      <CheckListpage/>



      {/* <Product/> */}

<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
>>>>>>> 77fa42437102c4518d1fb29c32607787bf94eb6a
        {children}
>>>>>>> 26a21cfa91c602e6313e72814abc6e12acefdbb3

      {children}

      {/* <Footer/> */}
    </>


  );
}
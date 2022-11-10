import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
<<<<<<< HEAD

// import Product from "../Product";


=======
>>>>>>> 8ce88254ea0f9072816ab0d77f68959072c92852
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

>>>>>>> 8ce88254ea0f9072816ab0d77f68959072c92852
        {children}
        {/* <Footer/> */}
    </>
  );
}
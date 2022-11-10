import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";
<<<<<<< HEAD

=======
import Footer from "../Footers/Footer";
>>>>>>> ee5326cc6f48d0f16b3beed8ad5797701dd60cbf

export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <About/>
        {children}
        {/* <Footer/> */}
    </>
  );
}
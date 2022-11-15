import IndexNavbar from "components/Navbars/IndexNavbar";
import BackGroundMain from "../Bg/BackGroundMain";
import Footer from "../Footers/Footer";

export default function IndexLayout({ children }) {
  
  return (
    <>
      <BackGroundMain />
      <IndexNavbar />
      {children}
      {/* <Footer/> */}
    </>


  );
}
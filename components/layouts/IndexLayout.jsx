import IndexNavbar from "components/Navbars/IndexNavbar";
import BackGroundMain from "../Bg/BackGroundMain";
import Footer from "../Footers/Footer";
import Topbar from "../Navbars/Topbar";

export default function IndexLayout({ children }) {
  

  return (
    <>
      <BackGroundMain />
      <Topbar/>
      <IndexNavbar/>
      <div className="mt-5">
      {children}
      </div>
      {/* <Footer/> */}
    </>


  );
}
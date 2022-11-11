import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "../Footers/Footer";
import ImageSider from "../ImageSlider/ImageSider";


export default function IndexLayout({ children }) {
  return (
    <>

      <IndexNavbar />
      <ImageSider/>

        {children}
    </>


  );
}
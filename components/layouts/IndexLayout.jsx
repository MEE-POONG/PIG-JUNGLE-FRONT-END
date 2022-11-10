import IndexNavbar from "components/Navbars/IndexNavbar";
import About from "../About/About";


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

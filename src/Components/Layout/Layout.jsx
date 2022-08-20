import "./Layout.scss";
import Navbar from "../Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout__content">{children}</main>
    </>
  );
};
export default Layout;

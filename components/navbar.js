import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Image src={logo} alt="logo" className="" />
      </div>
      <div className="tabs">
        <a className="tab">About</a>
        <a className="tab">Events</a>
        <a className="tab">Projects</a>
        <a className="tab">Awards</a>
        <a className="tab">Action</a>
      </div>
      <button className="btn navbar-end">Button</button>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar h-16 bg-base-100">
      <div className="navbar-start">
        <Image src={logo} alt="logo" className="" />
      </div>
      <div className="navbar-center tabs  hidden lg:flex md:flex">
        <div>
          <a className="tab">About</a>
          <a className="tab">Events</a>
          <a className="tab">Projects</a>
          <a className="tab">Awards</a>
          <a className="tab">Action</a>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Connect</a>
      </div>
    </nav>
  );
};

export default Navbar;

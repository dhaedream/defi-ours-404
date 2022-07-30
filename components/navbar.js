import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <nav className="tabs">
      <div>
        <Image src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;

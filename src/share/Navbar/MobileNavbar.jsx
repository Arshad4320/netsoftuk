import { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import img from "../../../public/assets/img/logo.jpg";
const MobileNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        About
      </Link>
      <Link
        to="/service"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className=" bg-white block md:hidden z-20 fixed top-0 w-full   shadow-md ">
      <div className="flex justify-between  items-center  ">
        <div className="flex gap-2">
          <Link className="flex items-center justify-center " to="/">
            {" "}
            <div className="w-44 h-20 p-2 ">
              <img className="w-ful h-full" src={img} alt="" />
            </div>
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className=" text-primary  focus:outline-none flex "
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6   mr-2     " />
          ) : (
            <div className="text-primary">
              <FaOutdent className=" h-6 w-6   mr-2   " />
            </div>
          )}
        </button>
      </div>
      {/* Menu */}
      <div
        className={`absolute bg-white w-full duration-700  ${
          isMenuOpen ? "right-0 " : "-right-[1000px] "
        }   `}
      >
        {/* Menu Content */}
        <div>
          <ul className="space-y-2 mx-4">
            <li>{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;

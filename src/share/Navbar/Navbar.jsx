import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden md:block shadow-lg fixed top-0 w-full bg-white z-10">
      <div className="md:max-w-4xl lg:max-w-7xl mx-auto ">
        <div className=" flex justify-between ">
          <div className="flex gap-3 items-center justify-center">
            <div className="w-28 h-24">
              {" "}
              {/* <img className="w-full h-full" src={logo} /> */}
            </div>
            <h3 className="hover:text-primary text-secondary text-3xl font-semibold">
              {" "}
              NETSOFT UK
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="text-secondary hover:border-b-2 border-b-primary   font-semibold text-md mx-3"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-secondary hover:border-b-2 border-b-primary   font-semibold text-md mx-3"
            >
              About
            </Link>
            <Link
              to="/service"
              className="text-secondary hover:border-b-2 border-b-primary   font-semibold text-md mx-3"
            >
              Service
            </Link>
            <Link
              to="/contact"
              className="text-secondary hover:border-b-2 border-b-primary   font-semibold text-md mx-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

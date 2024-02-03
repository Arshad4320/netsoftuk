import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252525] py-6 ">
      <div className="md:max-w-7xl lg:mx-auto mx-5 md:mx-8  mt-14">
        <div className="">
          <div>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white text-3xl mb-2">
              NETSOFTUK
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              NETSOFTUK is your one-stop solution for Web, Apps & Digital
              Marketing. We have innovative products of Food Ordering System to
              fulfill the market demand, a Local Services Booking system that
              makes our life easier. We are also involved with E-commerce on our
              own platforms and well known marketplaces.
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Phone - 01916918791
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Email - contact@foodapps.uk || foodapps@gmail.com
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Office Address - 2a Baconsfield Street, Newcastle Upon Tyne,
              NE45JN
            </p>
          </div>
        </div>

        <div className="flex justify-center  mt-16">
          <p className="hover:text-gray-400 font-medium transition duration-500 text-white">
            © Copyright NETSOFTUK. All Rights Reserved .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

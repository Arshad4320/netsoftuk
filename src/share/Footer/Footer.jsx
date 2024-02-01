import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252525] py-6 ">
      <div className="md:max-w-7xl lg:mx-auto mx-5 md:mx-8  mt-14">
        <div className="">
          <div>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white text-3xl mb-2">
              Bornobi
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Bornobi Properties is an independent Development Agent, that
              specialises in Development, lettings and Management.
              <br /> Our local knowledge and connection make us experts within
              our industry.
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Phone - 01916918791
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Email - info@bornobiproperties.co.uk
            </p>
            <p className="hover:text-gray-400 font-medium transition duration-500 text-white mb-2">
              Office Address - 138 Hartington Street, Newcastle upon Tyne, NE4
              6PS
            </p>
          </div>
        </div>

        <div className="flex justify-center  mt-16">
          <p className="hover:text-gray-400 font-medium transition duration-500 text-white">
            © Copyright Bornobi All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

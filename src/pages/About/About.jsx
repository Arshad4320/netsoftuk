import React from "react";
import Headding from "../../components/Heading/Heading";

import img from "../../../public/assets/img/about-1.jpg";
import img2 from "../../../public/assets/img/slider3.jpg";
import img3 from "../../../public/assets/img/slider.jpg";
import img4 from "../../../public/assets/img/slider5.jpg";

import Pragraph from "./../../components/Pragraph/Pragraph";

const imageProperty = [
  {
    id: 1,
    image: img,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
];

const About = () => {
  return (
    <div className="mx-4 md:max-w-4xl lg:max-w-7xl md:mx-auto pb-10 mt-16 lg:mt-24  ">
      <Headding className={"text-center"} props={"About"} />
      <div className=" md:py-7">
        <p>
          NETSOFTUK is a one-stop solution for Property Digitalization in UK
          with online letting platform called Rent & Rooms and Online Builders
          Recruiting platform called Rapid Handy works. We also provide the
          services for property Branding, Service Accommodation (SA) Management
          Digital Marketing with Online Travel Agency (OTA). We are totally
          digitalized for our marketing and adverting to reach and engaged the
          clients. We are on all major following platforms and media s to show
          our services and supports.
        </p>
        <div className="flex md:gap-4 flex-col  md:flex-row md:mt-3">
          <a
            className="text-white bg-primary hover:bg-blue-700 duration-500 flex  py-3 lg:w-[250px] sm:w-full lg:py-4 my-4 font-semibold rounded-md shadow-md items-center justify-center"
            href="http://rentandrooms.com/"
          >
            Rent And Rooms
            {/* <button className=""></button> */}
          </a>{" "}
          <a
            className="text-white bg-primary hover:bg-blue-700 duration-500 flex  py-3 lg:w-[250px] sm:w-full  lg:py-4 my-4 font-semibold rounded-md shadow-md items-center justify-center"
            href="http://www.rapidhandyworks.com/"
          >
            Refid Handy Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

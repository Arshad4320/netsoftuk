import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import Headding from "../../components/Heading/Heading";
import { FaCode } from "react-icons/fa";
import img from "../../../public/assets/img/img.avif";
import img2 from "../../../public/assets/img/img2.avif";
import img3 from "../../../public/assets/img/img3.avif";
import img4 from "../../../public/assets/img/img4.avif";
import img5 from "../../../public/assets/img/img5.avif";
import img6 from "../../../public/assets/img/img6.avif";
import { FaUserNurse } from "react-icons/fa6";
import { propertyBrand } from "../../components/ServiceItem/propertyBranding";
import { digitalMarketing } from "../../components/ServiceItem/digitalMarketing";
import { management } from "../../components/ServiceItem/management";

const Service = () => {
  return (
    <div className="mx-4 md:max-w-4xl  lg:max-w-7xl md:mx-auto   mt-24 pb-10 ">
      <Headding className={"text-center mb-10"} props={"Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-blue-800 hover:bg-blue-800 duration-500 hover:text-white ">
          <div className="flex justify-center mb-4">
            <img className="rounded-md rounded-b-none" src={img} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Short letting Platform
            </h3>
            <p className="text-justify font-normal text-lg ">
              Discover unique and convenient stays with our short letting
              platform. Explore diverse properties for memorable experiences and
              seamless travel adventures.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-pink-800 hover:bg-pink-800 duration-500 hover:text-white ">
          <div className="flex justify-center mb-4">
            <img className="rounded-md rounded-b-none" src={img2} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Builders E-recruitment
            </h3>
            <p className="text-justify font-normal text-lg ">
              Builders E-recruitment: Unlock opportunities in the construction
              industry. Explore diverse roles and build your career with our
              innovative online recruitment platform.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-orange-700 hover:bg-orange-700 duration-500 hover:text-white ">
          <div className="  mb-4">
            <img className="rounded-md rounded-b-none" src={img3} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Property Web-development
            </h3>
            <p className="text-justify font-normal text-lg ">
              Revolutionize property web development with cutting-edge designs,
              seamless user experience, and robust features for a dynamic and
              engaging real estate platform.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-cyan-700 hover:bg-cyan-700 duration-500 hover:text-white ">
          <div className=" mb-4">
            <img className="rounded-md rounded-b-none" src={img4} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              SA Digital Marketing
            </h3>
            <p className="text-justify font-normal text-lg ">
              Elevate your brand with SA Digital Marketing's strategic
              solutions, driving growth through targeted campaigns, SEO
              expertise, and innovative online presence.
            </p>

            <div>
              {digitalMarketing.map((data) => {
                return (
                  <div key={data.id} className="flex items-center gap-2 mt-2">
                    {" "}
                    <FaCheck className="font-semibold " />{" "}
                    <span className="font-semibold text-lg">{data.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-purple-950 hover:bg-purple-950 duration-500 hover:text-white ">
          <div className="mb-4">
            <img className="rounded-md rounded-mb-none" src={img5} alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              Property Branding
            </h3>
            <p className="text-justify font-normal text-lg ">
              Transform properties into iconic brands with distinctive identity,
              compelling narratives, and strategic marketing, creating lasting
              impressions in the real estate market.
            </p>

            <div>
              {propertyBrand.map((data) => {
                return (
                  <div key={data.id} className="flex items-center gap-2 mt-2">
                    {" "}
                    <FaCheck className="font-semibold " />{" "}
                    <span className="font-semibold text-lg">{data.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-b-red-800 hover:bg-red-800 duration-500 hover:text-white ">
          <div className=" flex justify-center mb-4">
            <img src={img6} className="rounded-md rounded-b-none" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
              OTA Management
            </h3>
            <p className="text-justify font-normal text-lg ">
              Optimize OTA Management for seamless bookings, increased
              visibility, and efficient operations, enhancing property
              performance in the hospitality industry.
            </p>
            <div>
              {management.map((data) => {
                return (
                  <div key={data.id} className="flex items-center gap-2 mt-2">
                    {" "}
                    <FaCheck className="font-semibold " />{" "}
                    <span className="font-semibold text-lg">{data.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

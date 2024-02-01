import React from "react";
import { FaCheck } from "react-icons/fa6";

import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";

import Headding from "../../components/Heading/Heading";
import { MdHandyman } from "react-icons/md";
import { handyman } from "../../components/ServiceItem/handymanItem";
import { MdElectricalServices } from "react-icons/md";

import { recruitment } from "../../components/ServiceItem/recruitment";

import { FaHome } from "react-icons/fa";
import { propertyBrand } from "../../components/ServiceItem/propertyBranding";
import { digitalMarketing } from "../../components/ServiceItem/digitalMarketing";

const Service = () => {
  return (
    <div className="mx-4 md:max-w-4xl  lg:max-w-7xl md:mx-auto   mt-24 pb-10 ">
      <Headding className={"text-center mb-10"} props={"Service"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-blue-600 hover:bg-blue-600 duration-500 hover:text-white p-6">
          <div className="flex justify-center mb-4">
            <FaHome className="text-7xl" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Short letting Platform
          </h3>
          <p className="text-justify font-normal text-lg ">
            Discover a world of temporary residences through our Short Letting
            Platform, where comfort meets convenience, transforming your stay
            into perfection effortlessly.
          </p>
          <div>
            {recruitment.map((data) => {
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
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-pink-600 hover:bg-pink-600 duration-500 hover:text-white p-6">
          <div className="flex justify-center mb-4">
            <SiHomeassistantcommunitystore className="text-7xl" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Builders E-recruitment
          </h3>
          <p className="text-justify font-normal text-lg ">
            Builders E-recruitment Bridging aspirations and opportunities,
            constructing futures through digital talent acquisition, shaping the
            foundation of success in every hire.
          </p>
          <div>
            {recruitment.map((data) => {
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
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-purple-600 hover:bg-purple-600 duration-500 hover:text-white p-6">
          <div className="flex justify-center mb-4">
            <MdManageAccounts className="text-7xl" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Property Branding
          </h3>
          <p className="text-justify font-normal text-lg ">
            Elevate your property's identity with our unique branding. From
            captivating designs to strategic marketing, we turn spaces into
            brands.
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
        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-green-600 hover:bg-green-600 duration-500 hover:text-white p-6">
          <div className="flex justify-center mb-4">
            <MdManageAccounts className="text-7xl" />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            SA Digital Marketing
          </h3>
          <p className="text-justify font-normal text-lg ">
            SA Digital Marketing pioneers strategies that propel brands forward,
            navigating the dynamic digital landscape to achieve unparalleled
            online visibility and success.
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

        {/* <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-red-600 hover:bg-red-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdHandyman className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            OTA Management
          </h3>
          <p className="text-justify font-normal text-lg ">
            All our handymen are highly experienced, skilled, and trained in all
            aspects of in-uk maintenance and repairs.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {handyman.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className="font-semibold " />{" "}
                      <span className="font-semibold text-lg">
                        {data.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>

        <div className="rounded-md shadow-md border-y-2 hover:shadow-lg border-y-orange-600 hover:bg-orange-600 duration-500 hover:text-white p-6">
          <div className=" flex justify-center mb-4">
            <MdElectricalServices className="text-7xl " />
          </div>
          <h3 className="text-xl md:text-2xl  font-semibold py-2 text-center">
            Property Web-development
          </h3>
          <p className="text-justify font-normal text-lg ">
            Our team of specialist electricians have all passed our rigorous
            background and qualifications checks so you can be certain of the
            safety and expertise of any electric work we undertake.
          </p>
          <div>
            <p>
              {" "}
              <div>
                {electritianItem.map((data) => {
                  return (
                    <div key={data.id} className="flex items-center gap-2 mt-2">
                      {" "}
                      <FaCheck className="font-semibold " />{" "}
                      <span className="font-semibold text-lg">
                        {data.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import Form from "../../components/Form/Form";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoClock } from "react-icons/go";
import Headding from "../../components/Heading/Heading";
const contactDetails = [
  {
    id: 1,
    title: " Address",
    description: "2a Baconsfield Street,Newcastle Upon Tyne, NE45JN",
    icon: <IoLocationOutline />,
  },
  {
    id: 2,
    title: " Call Us",
    description: "01916918791",
    icon: <FiPhone />,
  },
  {
    id: 3,
    title: " Email Us",
    description: "info@bornobiproperties.co.uk",
    icon: <MdOutlineMarkEmailRead />,
  },
  {
    id: 4,
    title: " Open Hours",
    description: (
      <div>
        <p>Saturday - Thursday</p> <p>10:00AM - 12:00PM</p>
      </div>
    ),
    icon: <GoClock />,
  },
];

const Contact = () => {
  return (
    <div className="mx-4 md:max-w-4xl lg:max-w-7xl md:mx-auto   mt-24 pb-20">
      <Headding className={"text-center mb-10"} props={"Contact"} />
      <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 ">
          {contactDetails.map((data) => {
            return (
              <div
                className="shadow-md hover:shadow-lg p-4 duration-300 ease-in-out hover:border-2 hover:border-primary rounded-md "
                key={data.id}
              >
                <div className="flex justify-center mb-2 text-primary">
                  <div className="text-5xl text-center">{data.icon}</div>
                </div>
                <h3 className="text-primary text-xl font-semibold text-center mb-1">
                  {data.title}
                </h3>
                <p className="text-secondary text-center">{data.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;

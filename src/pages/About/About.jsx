import React from "react";
import Headding from "../../components/Heading/Heading";

// import img from "../../assets/img/property-1.jpg";
// import img2 from "../../assets/img/electrician.avif";
// import img3 from "../../assets/img/Handy.jpg";
// import img4 from "../../assets/img/management.jpg";
import Pragraph from "./../../components/Pragraph/Pragraph";

const pragrapContent = [
  {
    id: 1,
    title:
      "NETSOFTUK is your one-stop solution for Web, Apps & Digital Marketing.We have innovative products of Food Ordering System to fulfill the market demand, a Local Services Booking system that makes our life easier.",
  },
];

const imageProperty = [
  // {
  //   id: 1,
  //   image: img,
  // },
  // {
  //   id: 2,
  //   image: img2,
  // },
  // {
  //   id: 3,
  //   image: img3,
  // },
  // {
  //   id: 4,
  //   image: img4,
  // },
];

const About = () => {
  return (
    <div className="mx-4 md:max-w-4xl lg:max-w-7xl md:mx-auto pb-10 mt-16 lg:mt-24  ">
      <Headding className={"text-center"} props={"About"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-7">
        <div className=" ">
          {pragrapContent.map((data) => {
            return <Pragraph key={data.id} props={data.title} />;
          })}
          <div className="flex md:gap-4 flex-col md:flex-row md:mt-3">
            <a className="w-full" href="http://rentandrooms.com/">
              <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 my-4 font-semibold rounded-md shadow-md items-center justify-center">
                Rent A Room
              </button>
            </a>{" "}
            <a className="w-full" href="http://www.rapidhandyworks.com/">
              <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3  lg:py-4 md:my-4 font-semibold rounded-md shadow-md items-center justify-center">
                Book A Handyman
              </button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          {imageProperty.map((image) => {
            return (
              <div key={image.id}>
                <div className="relative group">
                  <div className="w-full h-44 md:h-64">
                    <img
                      className="w-full h-full rounded-md"
                      src={image.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-65 group-hover:bg-black rounded-md transition duration-700 ease-in-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

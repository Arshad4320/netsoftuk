import React from "react";

import img from "../../../public/assets/img/slider.jpg";
import img2 from "../../../public/assets/img/slider2.jpg";
import img3 from "../../../public/assets/img/slider3.jpg";
import img4 from "../../../public/assets/img/post-single-1.jpg";
import img5 from "../../../public/assets/img/slider4.jpg";
import img6 from "../../../public/assets/img/slider5.jpg";
import img7 from "../../../public/assets/img/slider7.jpg";
import img8 from "../../../public/assets/img/slider8.jpg";

const image = [
  { id: 1, img: img },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
];

import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

const Carusol = () => {
  const swiperRef = useRef;
  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to slide to the next slide
  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className=" mt-20">
        <div className="group col-span-2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper mx-auto w-[100%]"
            speed={1500}
          >
            {/* slider  */}
            {image.map((img) => {
              return (
                <SwiperSlide key={img.id} className="bg-[#EEEEEE] ">
                  <div className="relative text-white">
                    <img
                      src={img.img}
                      alt=""
                      className="h-[50vh] md:h-[90vh] w-full"
                    />
                    <span className="absolute top-0 bg-black left-0 opacity-10 inset-0"></span>
                    <div className="absolute left-5 top-[30%] ml-14 w-[65%]"></div>
                  </div>

                  <div className="absolute inset-0 flex  items-end opacity-50 bg-black rounded-md transition duration-700 ease-in-out"></div>
                </SwiperSlide>
              );
            })}

            {/* slider button */}
            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button absolute left-0 top-[35%] md:top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goPrevButton}
              >
                <MdOutlineArrowCircleLeft />
              </button>
              <button
                className="next-button absolute right-0 top-[35%] md:top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goNextButton}
              >
                <MdOutlineArrowCircleRight />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carusol;

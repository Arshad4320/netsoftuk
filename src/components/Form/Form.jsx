import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="shadow-md p-3 md:p-7 rounded ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Name*
          </label>
          <input
            className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-3 mb-2 font-semibold"
            {...register("name")}
            placeholder="name"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Subject*
          </label>
          <input
            className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-3 mb-2 font-semibold"
            {...register("Subject")}
            placeholder="Subject"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Message*
          </label>
          <textarea
            className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-3 mb-2 font-semibold"
            {...register("Message")}
            placeholder="Message"
          />
        </div>

        <button className="text-white bg-primary hover:bg-blue-400 duration-500 flex w-full py-3 lg:py-4 my-6 font-semibold rounded-md shadow-md items-center justify-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

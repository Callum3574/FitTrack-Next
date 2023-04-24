import { FC } from "react";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-2" data-aos="fade-up">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to find the best walk routes in your area?
          </h1>
          <p>Sign up to weekly updates on best rated walks in your area</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              name=""
              id=""
              data-aos="fade-up"
            />
            <button
              className="bg-[#53B3CB] w-[200px] rounded-md font-medium ml-4 my-6  py-3 text-black"
              data-aos="fade-up"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

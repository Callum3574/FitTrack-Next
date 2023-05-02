import { FC, useState } from "react";
import { TotalsProps } from "../../../Types";
import { totalSteps } from "@/utils/checkAllTotals";
import ReactSimplyCarousel from "react-simply-carousel";

const Totals: FC<TotalsProps> = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
      <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative items-center justify-center flex flex-col h-full">
        <h1 className="text-2xl font-bold">Total Steps This Year</h1>
        <p className="text-2xl font-semibold mt-4 text-center">
          {totalSteps(data)}
        </p>
        <button className="bg-white text-[#21445d] font-semibold py-2 px-4 mt-5 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default Totals;

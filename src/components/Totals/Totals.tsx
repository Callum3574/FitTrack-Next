import { FC } from "react";

interface TotalsProps {}

const Totals: FC<TotalsProps> = ({}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
      <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <h1 className="text-2xl font-bold">Total Steps This Week</h1>
        <p className="text-2xl font-semibold mt-4">2939</p>
        <button className="bg-white text-[#21445d] font-semibold mt-4 px-8 py-3 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Totals;

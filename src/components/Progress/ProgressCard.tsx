import { FC } from "react";
import { ProgressCardProps } from "../../../Types";

const ProgressCard: FC<ProgressCardProps> = ({ data }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
      <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <p className="text-2xl font-semibold mt-4 text-center">Jogging Hero</p>

        <p className="text-center text-gray-400">12 km / month</p>
        <progress
          className="progress progress-success w-100 "
          value="40"
          max="100"
        ></progress>
        <div className="flex flex-row justify-between mt-3">
          <div>
            <p className="text-center text-gray-400">12 / 36km</p>
          </div>
          <div className="badge badge-outline mt-1">2 days left</div>
        </div>
        <div className="flex justify-center">
          <button className="bg-white text-[#21445d] font-semibold mt-4 px-8 py-3 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

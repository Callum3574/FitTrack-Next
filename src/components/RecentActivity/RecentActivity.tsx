import { FC, useState } from "react";
import { BsActivity } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RecentActivityProps, WalksAndRuns } from "../../../Types";
import Link from "next/link";

const RecentActivity: FC<RecentActivityProps> = ({ data }) => {
  if (typeof data === "undefined") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-4 py-4 h-auto">
      <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-auto shadow-2xl hover:shadow-lg transform hover:scale-105 transition duration-300 relative justify-center items-center flex flex-col ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Recent Activity</h1>
        </div>
        <div className="flex flex-col sm:flex-row md:divide-x divide-gray-500 space-x-0 sm:space-x-10">
          <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0">
            <div className="mb-2 flex flex-col items-center md:items-start">
              <h1 className="text-lg font-semibold">
                Activity: {data[data.length - 1]?.workout_type}
              </h1>
              <p className="text-lg">{data[data.length - 1]?.location}</p>
              <p className="text-lg">{data[data.length - 1]?.distance} km</p>
              <div className="flex space-x-8 mt-3">
                <AiOutlineFacebook size={30} />
                <AiFillTwitterSquare size={30} />
                <AiOutlineInstagram size={30} />
                <div data-tip="View all exercises" className="tooltip">
                  <Link href="/activity">
                    <BsActivity
                      size={30}
                      className="text-white duration-300 ease-in-out hover:bg-slate-500 cursor-pointer rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 text-center">
            <h1 className="text-lg font-semibold">Breakdown:</h1>

            <p className="text-lg">
              {data[data.length - 1].date.toString().split("T")[0]}
            </p>
            <p className="text-lg">Time: {data[data.length - 1]?.time}</p>
            <p className="text-lg">
              Duration: {data[data.length - 1]?.duration}
            </p>
            <p className="text-lg">
              {data[data.length - 1]?.calories} Calories Burnt
            </p>
            <p className="text-lg">{data[data.length - 1]?.steps} Steps</p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link href="/activity">
            <button className="bg-white text-[#21445d] font-semibold px-6 py-2 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
              View All Activity
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;

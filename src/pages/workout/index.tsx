import Achievements from "@/components/Achievements/Achievements";
import DashNav from "@/components/DashNav/DashNav";
import FitnessOverview from "@/components/FitnessOverview/FitnessOverview";
import FriendList from "@/components/FriendsList/FriendList";
import Overview from "@/components/Overview/Overview";
import ProgressCard from "@/components/Progress/ProgressCard";
import { FC } from "react";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div className="col-span-10 space-y-4">
      <DashNav />

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
          <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <p className="text-2xl font-semibold mt-4 text-center">
              Jogging Hero
            </p>

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

        <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-4 py-4">
          <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Workout Sessions</h1>

            <div className="flex mt-12 w-full">
              <div className="flex-1 text-center">
                <p className="text-xl font-semibold ">Walks</p>
                <p className="text-3xl font-bold">50</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-semibold">Runs</p>
                <p className="text-3xl font-bold">20</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-semibold">Gym Sessions</p>
                <p className="text-3xl font-bold">30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
          <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <h1 className="text-2xl font-bold">Total Steps This Week</h1>
            <p className="text-2xl font-semibold mt-4">2939</p>
            <button className="bg-white text-[#21445d] font-semibold mt-6 px-8 py-3 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-4 py-4">
          <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-2xl hover:scale-105 transition duration-300 transform">
            <h1 className="text-5xl font-bold">07</h1>
            <p className="text-2xl font-semibold mt-2">Workout Sessions</p>
            <button className="bg-white text-[#21445d] font-semibold mt-4 px-6 py-2 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-4 py-4">
          <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-60 shadow-md flex flex-col items-center justify-center transition duration-300 transform hover:scale-105">
            <h1 className="text-5xl font-bold">07</h1>
            <p className="text-2xl font-semibold mt-2">Workout Sessions</p>
            <button className="bg-white text-[#21445d] font-semibold mt-4 px-6 py-2 rounded-full hover:bg-[#32616c] hover:text-white transition duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

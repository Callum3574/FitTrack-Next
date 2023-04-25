import { FC } from "react";

interface FitnessOverviewProps {}

const FitnessOverview: FC<FitnessOverviewProps> = ({}) => {
  return (
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
  );
};

export default FitnessOverview;

import { FC } from "react";

interface GoalCardProps {}

const GoalCard: FC<GoalCardProps> = ({}) => {
  return (
    <div className=" w-[40rem] mx-auto bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white p-8 rounded-lg h-52 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 mt-5">
      <div className="flex flex-row space-x-4 md:text-2xl text-xl">
        <h1 className=" ">Jogging Hero</h1>
        <p className="text-gray-400">57%</p>
      </div>

      <progress
        className="progress progress-accent w-full"
        value="57"
        max="100"
      ></progress>

      <div className="flex justify-between">
        <p className="text-lg">Complete 30k in one week</p>
        <div className="badge badge-outline mt-1 md:w-auto w-full ml-2">
          2 days left
        </div>
      </div>
      <p className="text-center text-gray-400 text-4xl mt-5">12 / 36km</p>
    </div>
  );
};

export default GoalCard;

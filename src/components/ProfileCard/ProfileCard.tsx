import { FC } from "react";
import Image from "next/image";
import { ProfileCardProps } from "../../../Types";

//!Need to configure Image component

const ProfileCard: FC<ProfileCardProps> = ({ session }: ProfileCardProps) => {
  return (
    <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-4 py-4">
      <div className="bg-gradient-to-tr from-[#21445d] to-[#32616c] text-white  rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 h-80 justify-center">
        <img
          className="rounded-xl shadow-2xl w-15 w-15"
          src={session?.user.image}
          height={100}
          width={100}
          alt="user profile picture"
        ></img>

        <h1 className="text-2xl font-bold mt-5">Callum Hall</h1>
        <div className="flex space-x-8 mt-5">
          <div className="flex flex-col items-center justify-center space-y-2">
            <span>Height</span>
            <div className="flex items-center justify-center text-black bg-white rounded-xl w-20 h-10 ">
              <p className="text-center">192 cm</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <span>Weight</span>
            <div className="flex items-center justify-center text-black bg-white rounded-xl w-20 h-10 ">
              <p className="text-center">64 kg</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span>Age</span>
            <div className="flex items-center justify-center text-black bg-white rounded-xl w-20 h-10 ">
              <p className="text-center">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

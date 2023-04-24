import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSession } from "next-auth/react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const { data: session } = useSession();

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#53B3CB] font-bold p-2">Let's stay fit together!</p>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-1">
          Grow with FitTrack
        </h1>

        <div className="flex justify-center items-center">
          <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold py-4">
            Keep track of
            <span className="md:ml-3 ml-1">
              <Typewriter
                words={["Walks", "Workouts", "Runs"]}
                loop={9999}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <p className="md:text-2xl sm:text-xl text-lg font-bold p-2 mt-2 text-gray-500 ">
          Join our community today and connect with like-minded individuals who
          share your interest in fitness and wellness.
        </p>
        <button className="bg-[#53B3CB] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
          {!session ? "JOIN NOW" : "DASHBOARD"}
        </button>
      </div>
    </div>
  );
};

export default Hero;

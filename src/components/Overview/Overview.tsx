import Image from "next/image";
import { FC } from "react";
import { useSession } from "next-auth/react";

interface OverviewProps {}

const Overview: FC<OverviewProps> = ({}) => {
  const { data: session } = useSession();

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="w-[450px] mx-auto my-4"
          alt="img"
          src="/Assets/Images/SprintingDoodle.svg"
          data-aos="fade-right"
          width={500}
          height={500}
        ></Image>
        <div className="flex flex-col justify-center">
          <p
            className="text-[#53B3CB] font-bold uppercase"
            data-aos="fade-right"
          >
            FitTrack Community{" "}
          </p>
          <h1
            className="md:text-4xl sm:text-3xl 2xl font-bold py-2 "
            data-aos="fade-right"
          >
            Share, Compete, Compare
          </h1>

          <h1 data-aos="fade-right">
            By sharing progress, communicating with others, and competing in
            challenges, our app provides a fun and effective way to stay
            motivated and achieve your fitness goals
          </h1>

          <button
            className="bg-[#53B3CB] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 text-black uppercase"
            data-aos="fade-right"
          >
            {!session ? "JOIN FitTrack" : "DASHBOARD"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;

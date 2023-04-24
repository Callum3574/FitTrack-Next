import { FC, useState } from "react";
import Hamburger from "hamburger-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className=" h-24 max-w-[1240px] mx-auto px-1 text-white w-full">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 text-white w-full">
        <h1 className="text-4xl text-[#53B3CB] font-bold cursor-pointer ml-5">
          FitTrack.
        </h1>

        <ul className="text-[#f2f2f2] text-xl hidden md:flex">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Workout</li>
          <li className="p-4 cursor-pointer">Community</li>
          <li className="p-4 cursor-pointer">Login</li>
        </ul>
        <div className="md:hidden">
          <Hamburger color="#53B3CB" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="top-0 left-0 right-0 origin-top animate-open-menu ">
          <ul className="text-[#f2f2f2] text-4xl md:hidden flex flex-col text-center">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">Workout</li>
            <li className="p-4 cursor-pointer">Community</li>
            <li className="p-4 cursor-pointer">Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

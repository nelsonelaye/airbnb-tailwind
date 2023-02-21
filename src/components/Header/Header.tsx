import logo from "../../assets/images/airbnb.png";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-y-2 h-20 px-10 text-base font-semibold">
      <img
        src={logo}
        alt="Airbnb logo"
        width="118px"
        className="object-contain cursor-pointer"
      />
      <div className="flex items-center thick-border py-2 rounded-3xl cursor-pointer hover:border-b-2">
        <div className="mx-1.5">
          <span className="px-4 cursor-pointer">Anywhere</span>

          <span className="px-4 border-db border-x-2 cursor-pointer">
            Any week
          </span>

          <span className="px-4 text-fade cursor-pointer">Any guests</span>
        </div>
        <div className="border-2 p-1.5 rounded-full bg-brand-color">
          <FiSearch
            fontSize="15px"
            color="#fff"
            className="cursor-pointer m-auto"
          />
        </div>
      </div>
      <div className="flex items-center">
        <span className="cursor-pointer py-2.5 px-4 hover:rounded-3xl hover:bg-grey">
          Airbnb your home
        </span>
        <div className="p-2 hover:rounded-full hover:bg-grey">
          <TbWorld fontSize="20px" className="cursor-pointer" />
        </div>
        <div className="flex items-center py-1 px-2 thick-border rounded-3xl ml-2  hover:border-b-2 cursor-pointer">
          <IoMdMenu fontSize="20px" className="mr-4 cursor-pointer" />
          <div className="relative bg-fade p-1.5 rounded-full">
            <div
              className="absolute w-3 h-3 rounded-full -right-1 top-0
              bg-brand-color"
            ></div>
            <FaUser fontSize="20px" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

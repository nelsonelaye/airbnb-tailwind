import { FaTimes } from "react-icons/fa";
// import { props as AppProps } from "./types";

const FilterModal = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen z-20 absolute top-0 bg-overlay">
      <div className="flex bg-white w-2/4 border-b-2 border-fade  py-2 mb-3">
        <FaTimes />
        <h2 className="text-lg text-center font-bold">Filters</h2>
      </div>
      <div>
        <p>Price range</p>
        <p></p>
      </div>
    </div>
  );
};

export default FilterModal;

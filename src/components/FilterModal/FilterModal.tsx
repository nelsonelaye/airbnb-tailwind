import { FaTimes, FaRegBuilding, FaHotel } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
// import { props as AppProps } from "./types";

const FilterModal = () => {
  const propertyTypes = [
    { type: "House", icon: <BsHouseDoor /> },
    { type: "Apartment", icon: <BsHouseDoor /> },
    { type: "Guest House", icon: <FaRegBuilding /> },
    { type: "Hotel", icon: <FaHotel /> },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen z-20 absolute top-0 bg-overlay">
      <div className="flex flex-col justify-center items-center bg-white w-4/6 border-b-2 border-fade">
        <div
          className="w-full flex items-center py-5 px-7"
          style={{ border: "0.7px solid rgba(198, 184, 184, 0.94)" }}
        >
          <FaTimes />
          <h2 className="text-lg text-center font-bold m-auto">Filters</h2>
        </div>
        <div className="w-full p-7">
          <div className="border-b-2 border-lb">
            <p className="text-base font-bold">Price range</p>
            <p className="text-fade">The average nightly price is $35</p>
          </div>
          <div>
            <p className="text-base font-bold my-5">Property Type</p>
            <div className="flex justify-between my-5">
              {propertyTypes?.map((item) => (
                <div
                  className="w-1/5 rounded-md p-4"
                  style={{ border: "0.7px solid rgba(198, 184, 184, 0.94)" }}
                >
                  <div className="text-3xl mb-10">{item.icon}</div>

                  <p className="text-xm font-bold">{item.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

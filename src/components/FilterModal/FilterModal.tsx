import { FaTimes, FaRegBuilding, FaHotel } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { props as AppProps } from "./types";
import Checkbox from "../Checkbox";

const FilterModal = ({ onclick }: AppProps) => {
  const propertyTypes = [
    { type: "House", icon: <BsHouseDoor /> },
    { type: "Apartment", icon: <BsHouseDoor /> },
    { type: "Guest House", icon: <FaRegBuilding /> },
    { type: "Hotel", icon: <FaHotel /> },
  ];

  const numberOfRooms = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen z-20 absolute top-0 bg-overlay">
      <div className="flex flex-col justify-center items-center bg-white w-4/6 border-b-2 border-fade">
        <div
          className="thick-border w-full flex items-center py-5 px-7 cursor-pointer"
          onClick={onclick}
        >
          <div className="cursor-pointer" onClick={onclick}>
            <FaTimes />
          </div>

          <h2 className="text-lg text-center font-bold m-auto">Filters</h2>
        </div>
        <div className="w-full p-7">
          <div className="border-b-2 border-lb">
            <p className="filters">Price range</p>
            <p className="text-tc font-medium">
              The average nightly price is $35
            </p>
          </div>
          <div className="border-b-2 border-lb">
            <p className="filters">Type of Place</p>

            <div className="flex items-start">
              <Checkbox />
              <div>
                <label>Private Room</label>
                <p className="text-tc">
                  Your own room in a home or a hotel, plus some shared common
                  spaces
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-lb">
            <p className="filters">Rooms and Beds</p>

            <div className="flex w-full">
              <input
                type="radio"
                id="any"
                name="bedrooms"
                value="any"
                className="hidden"
              />
              <label htmlFor="any" className="unselected-radio">
                {" "}
                Any
              </label>
              {numberOfRooms?.map((item) => (
                <>
                  <input
                    type="radio"
                    id={item.value.toString()}
                    name="bedrooms"
                    value={item.value}
                    className="hidden"
                  />
                  <label
                    htmlFor={item.value.toString()}
                    className="unselected-radio"
                  >
                    {" "}
                    {item.value}
                  </label>
                </>
              ))}
            </div>
          </div>
          <div>
            <p className="filters">Property Type</p>
            <div className="flex justify-between my-5">
              {propertyTypes?.map((item) => (
                <div className="thick-border w-1/5 rounded-md p-4">
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

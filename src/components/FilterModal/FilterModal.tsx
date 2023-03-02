import { FaTimes, FaRegBuilding, FaHotel } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { props as AppProps } from "./types";
import Checkbox from "../Checkbox";
// import Rheostat from "rheostat";
import RangeSlider from "../RangeSlider"

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
    <div className="flex flex-col justify-center items-center w-full h-auto z-20 absolute top-0 bg-overlay">
      <div className="flex flex-col justify-center items-center bg-white my-20 w-4/6 border-b-2 border-fade">
        <div
          className="thick-border w-full flex items-center py-5 px-7 cursor-pointer"
          onClick={onclick}
        >
          <div className="cursor-pointer" onClick={onclick}>
            <FaTimes />
          </div>

          <h2 className="text-lg text-center font-bold m-auto">Filters</h2>
        </div>
        <div className="w-full px-7">
          <div className="border-b-2 border-lb py-5">
            <p className="filters mb-1">Price range</p>
            <span className="text-tc font-medium">
              The average nightly price is $35
            </span>
            <RangeSlider/>
          </div>
          <div className="border-b-2 border-lb py-5">
            <p className="filters">Type of Place</p>

            <div className="flex items-start my-5">
              <Checkbox />
              <div className="w-2/4">
                <label className="font-semibold">Private Room</label>
                <p className="text-tc">
                  Your own room in a home or a hotel, plus some shared common
                  spaces
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-lb pb-8">
            <p className="filters">Rooms and Beds</p>

            <div className="my-5">
              <p className="text-tc text-sm font-medium my-2">Bedrooms</p>
              <div className="flex w-full">
                <div className="selected-option">Any</div>
                {numberOfRooms?.map((item) => (
                  <div className="unselected-option">{item.value}</div>
                ))}
              </div>
            </div>
            <div className="my-5">
              <p className="text-tc text-sm font-medium my-2">Beds</p>
              <div className="flex w-full">
                <div className="selected-option">Any</div>
                {numberOfRooms?.map((item) => (
                  <div className="unselected-option">{item.value}</div>
                ))}
              </div>
            </div>
            <div className="my-5">
              <p className="text-tc text-sm font-medium my-2">Bathrooms</p>
              <div className="flex w-full">
                <div className="selected-option">Any</div>
                {numberOfRooms?.map((item) => (
                  <div className="unselected-option">{item.value}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-5">
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

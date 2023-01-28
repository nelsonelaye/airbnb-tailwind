import { AiFillStar } from "react-icons/ai";
import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.png";
import room3 from "../../assets/images/room3.png";
import room4 from "../../assets/images/room4.jpg";
const Explore = () => {
  const homes = [
    {
      image: room4,
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      image: room3,
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      image: room1,
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      image: room2,
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
  ];
  return (
    <main className="w-full my-7 grid grid-cols-4 space-x-5 px-10">
      {homes?.map((home, index) => (
        <div key={index} className="w-72 text-base">
          <img
            src={home.image}
            style={{ width: "100%" }}
            className="h-72 rounded-md object-cover"
          />
          <div className="flex justify-between my-2.5">
            <div>
              <div className="font-bold">{home.location}</div>
              <div className="text-fade">{`Hosted by ${home.host}`}</div>
              <div className="text-fade">{home.date}</div>
              <div className="font-bold">{`$${home.price} per night`}</div>
            </div>
            <div>
              <AiFillStar fontSize="16px" className="inline mr-2" />
              {home.star}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Explore;

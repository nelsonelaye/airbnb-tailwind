import React from "react";
import { AiFillStar } from "react-icons/ai";
import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.png";
import room3 from "../../assets/images/room3.png";
import room4 from "../../assets/images/room4.jpg";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Explore = () => {
  const homes = [
    {
      images: [room1, room2, room3, room4],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room2, room1, room3, room4],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room3, room2, room4, room1],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room4, room3, room1, room2],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room1, room2, room3, room4],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room2, room1, room3, room4],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room3, room2, room4, room1],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
    {
      images: [room4, room3, room1, room2],
      location: "Lagos, Nigeria",
      host: "Arthur",
      date: "19-10-25",
      price: 35,
      star: 5.0,
    },
  ];
  const responsiveness = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <main className="w-full my-7 flex flex-wrap justify-between px-10">
      {homes?.map((home, index) => (
        <div key={index} className="w-72 my-5">
          <Slide
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            responsive={responsiveness}
          >
            {home.images?.map((image) => (
              <React.Fragment>
                <div className="w-full h-full bg-lb z-20 absolute top-0 left-0"></div>
                <AiOutlineHeart
                  fontSize="25px"
                  color="#fff"
                  className="absolute cursor-pointer top-5 right-5 z-20"
                />
                <img
                  src={image}
                  style={{ width: "100%" }}
                  className="h-72 object-cover"
                />
              </React.Fragment>
            ))}
          </Slide>

          <div className="flex justify-between my-2.5">
            <div className="space-y-1">
              <div className="font-bold">{home.location}</div>
              <div className="text-tc">{`Hosted by ${home.host}`}</div>
              <div className="text-tc">{home.date}</div>
              <div className="font-bold">{`$${home.price} per night`}</div>
            </div>
            <div>
              <AiFillStar fontSize="16px" className="inline mr-1" />
              {home.star}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Explore;

const Slide = styled(Carousel)`
  position: relative;
  border-radius: 6px;

  .react-multi-carousel-dot-list {
    margin-bottom: 20px;
  }

  .react-multi-carousel-dot button {
    background-color: #717171;
    border-color: #717171;
  }

  .react-multi-carousel-dot--active button {
    background-color: #fff;
    border-color: #fff;
  }
`;

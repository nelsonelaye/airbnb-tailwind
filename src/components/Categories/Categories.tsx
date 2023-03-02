import { GiIsland } from "react-icons/gi";
import { FaFireAlt, FaRegSnowflake } from "react-icons/fa";
import { MdOutlineDownhillSkiing, MdOutlineCabin } from "react-icons/md";
// import { HiOutlineHomeModern } from "react-icons/hi";
import { TbSailboat, TbPool } from "react-icons/tb";
import { SiStarbucks } from "react-icons/si";
import { IoMdSwitch } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { props } from "./types";
import styled from "styled-components";

const Categories = ({ onclick }: props) => {
  const category_list = [
    { title: "Tropical", icon: <GiIsland /> },
    { title: "Ski-in/out", icon: <MdOutlineDownhillSkiing /> },
    { title: "Amazing Pools", icon: <TbPool /> },
    { title: "Trending", icon: <FaFireAlt /> },
    { title: "Cabins", icon: <MdOutlineCabin /> },
    { title: "Boats", icon: <TbSailboat /> },
    { title: "Arctic", icon: <FaRegSnowflake /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
    { title: "Generic", icon: <SiStarbucks /> },
  ];
  return (
    <div className="flex items-center mt-10 mb-12 px-10">
      <Slide
        additionalTransfrom={0}
        arrows
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
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 12,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 5,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {category_list?.map((item) => (
          <div className="flex flex-col justify-center items-center w-fit text-sm text-tc m-auto">
            <div className="my-2 text-tc" style={{ fontSize: "20px" }}>
              {" "}
              {item.icon}
            </div>
            <div className="text-center">{item.title}</div>
          </div>
        ))}
      </Slide>

      <div
        className="flex h-10 text-base items-center rounded-lg py-2 px-2.5 thick-border cursor-pointer max-[768px]:hidden"
        onClick={onclick}
      >
        <IoMdSwitch fontSize="23px" className="cursor-pointer" />
        <span className="text-sm font-semibold mx-2 cursor-pointer">
          Filter
        </span>
      </div>
    </div>
  );
};

export default Categories;

const Slide = styled(Carousel)`
  .react-multi-carousel-item {
  }
  // .react-multi-carousel-item--active {
  //   border: 2px solid #000;
  //   color: #000;
  // }
  .react-multiple-carousel__arrow--left {
    display: none;
  }
  .react-multiple-carousel__arrow--right {
    right: calc(2% +1px);
  }

  .react-multiple-carousel__arrow {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    min-width: 35px;
    min-height: 35px;
  }
  .react-multiple-carousel__arrow::before {
    color: rgb(0, 0, 0);
    font-weight: 900;
    font-size: 15px;
  }
`;

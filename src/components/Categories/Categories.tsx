import { GiIsland } from "react-icons/gi";
import { FaFireAlt, FaRegSnowflake } from "react-icons/fa";
import { MdOutlineDownhillSkiing, MdOutlineCabin } from "react-icons/md";
// import { HiOutlineHomeModern } from "react-icons/hi";
import { TbSailboat, TbPool } from "react-icons/tb";
import { SiStarbucks } from "react-icons/si";
import { IoMdSwitch } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
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
    <div className="flex items-center my-5 px-10">
      <Carousel
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
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
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
          <div className="flex flex-col items-center w-fit text-base">
            <div className="my-2 text-fade" style={{ fontSize: "20px" }}>
              {" "}
              {item.icon}
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </Carousel>

      <div className="flex text-base border-2 rounded-lg p-2.5">
        <IoMdSwitch fontSize="25px" className="cursor-pointer" />
        <span className="mx-4 cursor-pointer">Filter</span>
      </div>
    </div>
  );
};

export default Categories;

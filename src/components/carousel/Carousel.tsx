// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import { Navigation } from "swiper/modules";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

//img
import carouselimg1 from "../../assets/1-189.jpg";
import carouselimg2 from "../../assets/2-495.jpg";
import carouselimg3 from "../../assets/31-614.jpg";

const Carousel = () => {
  return (
    <div className="relative">
      <div className="swiper-button image-swiper-button-next">
        <FaLongArrowAltRight />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <FaLongArrowAltLeft />
      </div>
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="mySwiper"
        loop
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselimg1})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        >
          <div className="">
            <span className="uppercase font-semibold text-gray-600 text-[16px]">
              Save Up to 40% OFF
            </span>
            <h2 className="font-bold text-4xl text-orange-500">
              Women Fashion
            </h2>
            <span className="text-[14px] text-slate-600">
              Welcome to the home of women's fashion clothing & accessories at
              Italy
            </span>
            <div className="mt-6">
              <button className="bg-orange-500 px-3 py-1 text-white hover:bg-black text-[14px]">
                Shop Now!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselimg2})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        >
          <div className="">
            <span className="uppercase font-semibold text-gray-600 text-[16px]">
              Save Up to 40% OFF
            </span>
            <h2 className="font-bold text-4xl text-orange-500">
              Women Fashion
            </h2>
            <span className="text-[14px] text-slate-600">
              Welcome to the home of women's fashion clothing & accessories at
              Italy
            </span>
            <div className="mt-6">
              <button className="bg-orange-500 px-3 py-1 text-white hover:bg-black text-[14px]">
                Shop Now!
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${carouselimg3})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        >
          <div className="">
            <span className="uppercase font-semibold text-gray-600 text-[16px]">
              Save Up to 40% OFF
            </span>
            <h2 className="font-bold text-4xl text-orange-500">
              Women Fashion
            </h2>
            <span className="text-[14px] text-slate-600">
              Welcome to the home of women's fashion clothing & accessories at
              Italy
            </span>
            <div className="mt-6">
              <button className="bg-orange-500 px-3 py-1 text-white hover:bg-black text-[14px]">
                Shop Now!
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

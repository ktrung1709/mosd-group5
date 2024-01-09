import { useEffect, useState } from "react";
import Title from "../Title/Title.jsx";
import { BsFillPeopleFill } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieCast = (cast) => {
  const [casts, setCasts] = useState();

  useEffect(() => {
    setCasts(cast.cast);
  }, [cast]);
  return (
    <div className="my-12">
      <Title title={"Casts"} Icon={BsFillPeopleFill} />
      <div className="mt-10">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 624,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            912: {
              slidesPerView: 3,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {casts?.map((cast) => (
            <SwiperSlide
              key={cast?.fullName}
              className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 swiper-lazy"
            >
              <img
                src={cast?.image}
                alt={cast?.fullName}
                className="w-11/12 h-96 object-cover rounded mb-4 swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              <p className="text-sm">{cast?.fullName}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default MovieCast;

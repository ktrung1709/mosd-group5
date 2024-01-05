import { useEffect, useState } from "react";
import Title from "../Title/Title.jsx";
import { PiMedalBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "../StarRate/Star.jsx";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { moviesService } from "../../features/movies/moviesService.js";

const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchTopMovie = async () => {
      const res = await moviesService.getTopRatedMovies()
      if (res)
        setMovies(res)
    }
    fetchTopMovie()
  }, [])
  const classNames =
    "hover:bg-star transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";

  return (
    <div className="my-16">
      <Title title="Top Rated" Icon={PiMedalBold} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={2}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 624,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            912: {
              slidesPerView: 4,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {movies?.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={movie?.image}
                  alt={movie?.name}
                  className="w-full h-full rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movie/${movie?.name}`}
                    className="font-semibold text-xl trancuted line-clamp-2"
                  >
                    {movie?.name}
                  </Link>
                  <div className="text-star">
                    <Star value={movie?.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;

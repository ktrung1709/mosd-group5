import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Movies } from "../../Data/MovieData.js";
import FlexMoviesItems from "../FlexMovieItems/FlexMovieItems.jsx";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./Banner.scss";
import { useEffect, useState } from "react";
import { moviesService } from "../../features/movies/moviesService.js";

const Banner = () => {
  const [movies, setMovies] = useState();
    useEffect(() => {
        const fetchTopMovie = async () => {
            const res = await moviesService.getLatestMovies()
            console.log("res: ", res)
            if (res)
                setMovies(res)
        }
        fetchTopMovie()
    }, [])
  return (
    <div className="relative w-full">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="banner w-full bg-dry"
      >
        {movies?.slice(0,3).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`${movie?.image}`}
              alt={movie?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie?.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMoviesItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie?.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 py-4 rounded text-sm bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

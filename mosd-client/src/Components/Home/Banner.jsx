import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FlexMoviesItems from "../FlexMovieItems/FlexMovieItems.jsx";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { moviesService } from "../../features/movies/moviesService.js";
import { userService } from "../../features/user/userService.js";
import { toast } from "react-toastify";
import "./Banner.scss";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchFirstMovie = async () => {
      const res = []
      const res1 = await moviesService.getMovies({ name: "The Dark Knight" })
      if (res1) {
        res.push(res1[0])
        res[0].image = "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
      }
      const res2 = await moviesService.getMovies({ name: "Aquaman And The Lost Kingdom" })
      if (res2) {
        res.push(res2[0])
        res[1].image = "https://4.bp.blogspot.com/-OCAaH58JNak/XCRL4FAxCZI/AAAAAAABBN4/sJzjyhS7jeU6wV6dEsO375DEKGuhZVHMACLcBGAs/s1600/DC%2BComics%25E2%2580%2599%2BAquaman%2BTeaser%2BMovie%2BPosters%2B%2526%2BBanner%2B%25282%2529.jpg"
      }
      const res3 = await moviesService.getMovies({ name: "Oppenheimer" })
      if (res3) {
        res.push(res3[0])
        res[2].image = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Oppenheimer-poster---Copy.jpg"
      }
      if (res)
        setMovies(res)
    }
    fetchFirstMovie()
  }, [])

  const handleAddToFavorite = async (movieId) => {
    const res = await userService.addToFavorite(movieId);
    if (res.message === "Added to favorite")
      toast.success("Add to favorite successfully", { autoClose: 1500 });
    else
      toast.error("Favortie movie already", { autoClose: 1500 });
  }

  return (
    <div className="relative w-full">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="banner w-full bg-dry image-banner"
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`${movie?.image}`}
              alt={movie?.name}
              className="w-full h-full object-cover "
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
                  <FaHeart onClick={() => handleAddToFavorite(movie._id)} />
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

import Title from "../Title/Title.jsx";
import { BsCollectionFill } from "react-icons/bs";
import MovieItem from "../MovieItem/MovieItem.jsx";
import { useEffect, useState } from "react";
import { moviesService } from "../../features/movies/moviesService.js";

const PopularMovies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchTopMovie = async () => {
      const res = await moviesService.getLatestMovies()
      if (res)
        setMovies(res)
    }
    fetchTopMovie()
  }, [])
  return (
    <div className="my-16">
      <Title title="Latest Movie" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 min latest-movie">
        {movies?.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

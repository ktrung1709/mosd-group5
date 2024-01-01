import Title from "../Title/Title.jsx";
import { FaPhotoFilm } from "react-icons/fa6";
import MovieItem from "../MovieItem/MovieItem.jsx";

const MovieRelated = (movies) => {
  return (
    <div className="my-16">
      <Title title={"Related Movies"} Icon={FaPhotoFilm} />
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {movies?.movies?.slice(0, 4).map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRelated;

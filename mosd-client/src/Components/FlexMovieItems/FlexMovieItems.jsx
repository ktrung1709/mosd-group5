import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes.js";
const FlexMoviesItems = ({ movie }) => {
  return (
    <div className="flex gap-5">
      <div className="flex items-center gap-5">
        {movie.categories.map((category, index) => (
          <span key={index} className="text-sm font-medium flex gap-4">
            {category}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className="text-subMain w-3 h-3" />
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiTime className="text-subMain w-3 h-3" />
        <span className="text-sm font-medium">{movie.time}</span>
      </div>
    </div>
  );
};

FlexMoviesItems.propTypes = {
  movie: moviePropTypes.isRequired,
};

export default FlexMoviesItems;

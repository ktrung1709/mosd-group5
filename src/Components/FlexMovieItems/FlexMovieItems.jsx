import React from "react";
import PropTypes from "prop-types";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
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
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlexMoviesItems;

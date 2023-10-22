import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
        <Link to={`/movie/${movie.name}`} className="w-full">
          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className="font-semibold truncate">{movie.name}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
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

export default MovieItem;

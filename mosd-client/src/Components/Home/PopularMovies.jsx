import React from "react";
import Title from "../Title/Title.jsx";
import { BsCollectionFill } from "react-icons/bs";
import { Movies } from "../../Data/MovieData.js";
import MovieItem from "../MovieItem/MovieItem.jsx";

const PopularMovies = () => {
  return (
    <div className="my-16">
      <Title title="Popolar Movie" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

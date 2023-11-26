import Layout from "../../Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import { Movies } from "../../Data/MovieData.js";
import MovieInfo from "../../Components/MovieDetail/MovieInfo.jsx";
import MovieCast from "../../Components/MovieDetail/MovieCast.jsx";
import MovieRelated from "../../Components/MovieDetail/MovieRelated.jsx";
import { useEffect } from "react";

const MovieDetailPage = () => {
  useEffect(() => {
    scroll(0, 0);
  });

  const { name } = useParams();
  const movie = Movies.find((movie) => movie.name === name);
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCast />
        <MovieRelated />
      </div>
    </Layout>
  );
};

export default MovieDetailPage;

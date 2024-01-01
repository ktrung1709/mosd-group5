import Layout from "../../Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import MovieInfo from "../../Components/MovieDetail/MovieInfo.jsx";
import MovieCast from "../../Components/MovieDetail/MovieCast.jsx";
import MovieRelated from "../../Components/MovieDetail/MovieRelated.jsx";
import { useEffect, useState } from "react";
import { getMovies } from "../../features/movies/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { moviesService } from "../../features/movies/moviesService.js";

const MovieDetailPage = () => {
  const dispatch = useDispatch()

  const { name } = useParams();
  const movie = useSelector(state => state.movies.movies)
  const [movieRelated, setMovieRalated] = useState([])

  useEffect(() => {
    dispatch(getMovies({ name: name }))
  }, [dispatch, name])

  useEffect(() => {
    scroll(0, 0);
  });

  useEffect(() => {
    const getMoviesRelated = async () => {
      if (movie) {
        const res = await moviesService.getMovies({ category: movie[0]?.categories[0] })
        if (res)
          setMovieRalated(res)
      }
    }
    if (movie)
      getMoviesRelated()
  }, [movie])

  return (
    <Layout>
      <MovieInfo movie={movie[0]} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCast cast={movie[0]?.cast} />
        <MovieRelated movies={movieRelated} />
      </div>
    </Layout>
  );
};

export default MovieDetailPage;

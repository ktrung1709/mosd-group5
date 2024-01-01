import Filters from "../../Components/MovieList/Filters.jsx";
import Layout from "../../Layout/Layout.jsx";
import { useEffect, useState } from "react";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
import { CgSpinner } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../features/movies/moviesSlice.js";
import { useParams } from "react-router-dom";

export const maxMoviesPerPage = 8
const MovieListPage = () => {
    const movieName = useParams()
    const dispatch = useDispatch()
    const [page, setPage] = useState(maxMoviesPerPage)
    const movies = useSelector(state => state.movies.movies)

    const handleLoadingMore = () => {
        setPage(page + maxMoviesPerPage)
    }

    useEffect(() => {
        scroll(0, 0);
    }, []);

    useEffect(() => {
        if (!movieName || movieName === "")
            dispatch(getMovies())
        if (movieName)
            dispatch(getMovies({ name: movieName.name }))
    }, [movieName, dispatch])

    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Filters />
                <p className="text-lg font-medium my-6">
                    Total <span className="font-bold text-subMain">{movies?.length}</span> items found
                </p>
                {
                    movies?.length > 0 ? <>
                        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6" style={{ minHeight: "468px" }}>
                            {
                                movies ? (movies?.slice(0, page)?.map((movie, index) => (
                                    <MovieItem key={index} movie={movie} />
                                ))) : <><CgSpinner className="animate-spin" /></>
                            }
                        </div>
                        <div className="w-full flex-colo md:my-20 my-10">
                            <button onClick={handleLoadingMore} className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain">
                                Loading more
                                <CgSpinner className="animate-spin" />
                            </button>
                        </div>
                    </> : <>
                        <p className="h-40">No result</p>
                    </>
                }
            </div>
        </Layout>
    );
};

export default MovieListPage;

import Filters from "../../Components/MovieList/Filters.jsx";
import Layout from "../../Layout/Layout.jsx";
import { useEffect, useState } from "react";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
import { CgSpinner } from "react-icons/cg";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { moviesService } from "../../features/movies/moviesService.js";

export const maxMoviesPerPage = 10
const MovieListPage = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState()
    const [showNext, setShowNext] = useState(true)

    const classNames = "hover:bg-star transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white"

    useEffect(() => {
        scroll(0, 0);
    }, [page]);

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await moviesService.getMovies({ page: page })
            if (res) {
                setMovies(res)
                if (res.length < 10)
                    setShowNext(false)
                else
                    setShowNext(true)
            }
        }
        fetchMovie()
    }, [page])

    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Filters />
                {/* <p className="text-lg font-medium my-6">
                    Total <span className="font-bold text-subMain">{movies?.length}</span> items found
                </p> */}
                {
                    movies?.length > 0 ? <>
                        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6" style={{ minHeight: "468px" }}>
                            {
                                movies ? (movies?.map((movie, index) => (
                                    <MovieItem key={index} movie={movie} />
                                ))) : <><CgSpinner className="animate-spin" /></>
                            }
                        </div>
                        <div className="w-full flex-colo md:my-20 my-10">
                            <div className="w-full px-1 flex-rows gap-6 pt-12">
                                <button className={classNames} >
                                    <BsCaretLeftFill onClick={() => setPage(page - 1)} />
                                </button>
                                {
                                    showNext ? <button className={classNames} >
                                        <BsCaretRightFill onClick={() => setPage(page + 1)} />
                                    </button> : <></>
                                }
                            </div>
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

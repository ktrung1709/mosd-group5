import Filters from "../../Components/MovieList/Filters.jsx";
import Layout from "../../Layout/Layout.jsx";
import { useEffect, useState } from "react";
import { Movies } from "../../Data/MovieData.js";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
import { CgSpinner } from "react-icons/cg";

export const maxMoviesPerPage = 2
const MovieListPage = () => {
    const [page, setPage] = useState(maxMoviesPerPage)

    const handleLoadingMore = () => {
        setPage(page + maxMoviesPerPage)
    }

    useEffect(() => {
        scroll(0, 0);
    });
    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Filters />
                <p className="text-lg font-medium my-6">
                    Total <span className="font-bold text-subMain">{Movies?.length}</span> items found
                </p>
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        Movies.slice(0, page).map((movie, index) => (
                            <MovieItem key={index} movie={movie} />
                        ))
                    }
                </div>
                <div className="w-full flex-colo md:my-20 my-10">
                    <button onClick={handleLoadingMore} className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain">
                        Loading more
                        <CgSpinner className="animate-spin" />
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default MovieListPage;

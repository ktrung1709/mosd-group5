import MovieListTable from "../../../Components/Admin/MovieListTable.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import { moviesService } from "../../../features/movies/moviesService.js";
import { userService } from "../../../features/user/userService.js"
import { useEffect, useState } from "react";

function FavoriteMovies() {
    const [favIds, setFavIds] = useState([]);
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchFavIds = async () => {
            const res = await userService.getFavorite()
            if (res) {
                setFavIds(res.movies.favorite);
            }
        };
        fetchFavIds();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            if (favIds) {
                const fetchedMovies = await Promise.all(
                    favIds.map((id) => moviesService.getMovieInfo({ movieId: id }))
                );
                setMovies(fetchedMovies);
            }
        };
        fetchMovies();
    }, [favIds]);

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Favorite Movies</h2>
                    <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                        Delete All
                    </button>
                </div>

                {movies ? (
                    <MovieListTable data={movies} admin={false} />
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>
        </SideBar>
    );
}

export default FavoriteMovies;
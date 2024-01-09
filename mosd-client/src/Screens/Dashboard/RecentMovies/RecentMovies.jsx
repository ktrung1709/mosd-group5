import MovieListTable from "../../../Components/Admin/MovieRecentTable.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import { moviesService } from "../../../features/movies/moviesService.js";
import { userService } from "../../../features/user/userService.js"
import { useEffect, useState } from "react";

function RecentMovies() {
    const [favIds, setFavIds] = useState([]);
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchFavIds = async () => {
            const res = await userService.getRecent()
            console.log(res)
            if (res) {
                setFavIds(res?.movies?.recent_view);
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
                    <h2 className="text-xl font-bold">Recent Movies</h2>
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

export default RecentMovies;
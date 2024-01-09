import MovieListTable from "../../../../Components/Admin/MovieListTable.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { moviesService } from "../../../../features/movies/moviesService.js";
import { userService } from "../../../../features/user/userService.js"
import { useEffect, useState } from "react";

function Dashboard() {
    const [recentIds, setRecentIds] = useState([]);
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchRecentIds = async () => {
            const res = await userService.getRecent();
            if (res) {
                setRecentIds(res.movies.recent_view);
            }
        };
        fetchRecentIds();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            if (recentIds) {
                const fetchedMovies = await Promise.all(
                    recentIds.map((id) => moviesService.getMovieInfo({ movieId: id }))
                );
                setMovies(fetchedMovies);
            }
        };
        fetchMovies();
    }, [recentIds]);

    const categories = new Set([]);
    movies?.map((movie) =>{
        const cats = movie.categories
        cats.forEach(cat => categories.add(cat))
    })

    const DashboardData = [
        {
            bg: "bg-orange-600",
            icon: FaRegListAlt,
            title: "Total Movies",
            total: movies?.length,
        },
        {
          bg: "bg-blue-700",
          icon: HiViewGridAdd,
          title: "Total Categories",
          total: categories?.size,
        },
    ];

    return (
        <SideBar>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {DashboardData.map((data, index) => (
                    <div
                        key={index}
                        className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
                    >
                        <div
                            className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
                        >
                            <data.icon />
                        </div>
                        <div className="col-span-3">
                            <h2>{data.title}</h2>
                            <p className=" mt-2 font-bold">{data.total}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="text-md font-medium my-6 text-border">Recent Movies</h3>
            {movies ? (
                <MovieListTable data={movies} admin={false} />
            ) : (
                <p>Loading movies...</p>
            )}
        </SideBar>
    );
}

export default Dashboard;
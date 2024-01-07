import MovieListTable from "../../../../Components/Admin/MovieListTable.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../../features/movies/moviesSlice.js";
import { categoryService } from "../../../../features/category/categoryService.js"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
    const movieNameOrFilter = useParams()
    const dispatch = useDispatch()
    const [nameMovieParam, setNameMovieParam] = useState("")
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        if (movieNameOrFilter?.name)
            setNameMovieParam(movieNameOrFilter.name)
    }, [movieNameOrFilter])

    useEffect(() => {
        if (!nameMovieParam || nameMovieParam === null)
            dispatch(getMovies())
        if (nameMovieParam)
            dispatch(getMovies({ name: nameMovieParam }))
    }, [dispatch, nameMovieParam])

    const categories = categoryService.getCategories()

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
          total: categories?.length,
        },
        {
          bg: "bg-green-600",
          icon: FaUser,
          title: "Total Users",
          total: "",
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
            <MovieListTable data={movies.slice(0, 5)} admin={true} />
        </SideBar>
    );
}

export default Dashboard;
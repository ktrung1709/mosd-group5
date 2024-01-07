import MovieListTable from "../../../../Components/Admin/MovieListTable.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../../features/movies/moviesSlice.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function MoviesList() {
    const movieNameOrFilter = useParams()
    const dispatch = useDispatch()
    const [nameMovieParam, setNameMovieParam] = useState("")
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        if (movieNameOrFilter?.name)
            setNameMovieParam(movieNameOrFilter.name)
    }, [movieNameOrFilter])

    useEffect(() => {
        if (!nameMovieParam  || nameMovieParam === null)
            dispatch(getMovies())
        if (nameMovieParam)
            dispatch(getMovies({ name: nameMovieParam }))
    }, [dispatch, nameMovieParam])

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Movies List</h2>
                    <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                        Delete All
                    </button>
                </div>

                <MovieListTable data={movies} admin={true} />
            </div>
        </SideBar>
    );
}

export default MoviesList;
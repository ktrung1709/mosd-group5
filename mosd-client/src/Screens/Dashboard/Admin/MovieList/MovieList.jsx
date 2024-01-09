import SideBar from "../../SideBar/SideBar.jsx";
import { moviesService } from "../../../../features/movies/moviesService.js";
import { userService } from "../../../../features/user/userService.js"
import { useEffect, useState } from "react";
import MovieItem from "../../../../Components/MovieDeleteItem/MovieItem.jsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function MoviesList() {
    const [lists, setLists] = useState()
    const [check, setCheck] = useState(false)
    useEffect(() => {
        const fetchLists = async () => {
            const fetchedListNames = await userService.getLists();
            if (fetchedListNames) {
                const fetchedLists = await Promise.all(
                    fetchedListNames.movies.watch_list.map((name) =>
                        userService.getListInfo(name.list_name).then((res) => res.list.watch_list[0])
                    )
                );
                const listsWithMovies = await Promise.all(
                    fetchedLists.map(async (list) => ({
                        ...list,
                        movies: await Promise.all(
                            list.movies.map((movieId) =>
                                moviesService.getMovieInfo({ movieId })
                            )
                        ),
                    }))
                );
                setLists(listsWithMovies);
            }
        };
        fetchLists();
        setCheck(false)
    }, [check]);

    const handleDeleteList = async (listName) => {
        const res = await userService.deleteList(listName)
        if (res.message === "Deleted list") {
            toast.success("Deleted list", { autoClose: 1500 });
            setCheck(true)
        }
        else
            toast.error("Something went wrong", { autoClose: 1500 });
    }

    const handleDeleteFromList = async (listName, movieId) => {
        const res = await userService.deleteFromList(listName, movieId);
        if (res.message === "Deleted from list") {
            toast.success("Deleted from list", { autoClose: 1500 });
            setCheck(true)
        }
        else
            toast.error("Something went wrong", { autoClose: 1500 });
    }

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">My Watch Lists</h2>
                </div>

                {lists?.map((list, idx) => (
                    <div className="my-16" key={idx}>
                        <h3 className="text-l font-bold flex justify-between">
                            <span>{list?.list_name}</span>
                            <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded"
                                onClick={() => { handleDeleteList(list?.list_name) }}
                            >
                                Delete
                            </button>
                        </h3>
                        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 min latest-movie">
                            {list?.movies.map((movie, index) => (
                                <div key={index} className="border border-border p-1 w-full h-full hover:scale-95 transitions relative rounded overflow-hidden">
                                    <Link to={`/movie/${movie?.name}`} className="w-full">
                                        <img
                                            src={movie?.thumbnail}
                                            alt={movie?.name}
                                            className="w-full movie-thumbnail object-cover"
                                        />
                                    </Link>
                                    <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
                                        <h3 className="font-semibold truncate w-3/4">{movie?.name}</h3>
                                        <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
                                            <MdDelete onClick={() => handleDeleteFromList(list?.list_name, movie?._id)} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SideBar>
    );
}

export default MoviesList;
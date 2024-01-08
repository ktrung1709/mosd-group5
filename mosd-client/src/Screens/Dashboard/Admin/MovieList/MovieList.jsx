import SideBar from "../../SideBar/SideBar.jsx";
import { moviesService } from "../../../../features/movies/moviesService.js";
import { userService } from "../../../../features/user/userService.js"
import { useEffect, useState } from "react";
import MovieItem from "../../../../Components/MovieItem/MovieItem.jsx";


function MoviesList() {
    const [listNames, setListNames] = useState([])
    const [lists, setLists] = useState()

    // useEffect(() => {
    //     const fetchNames = async () => {
    //         const res = await userService.getLists();
    //         if (res)
    //             setListNames(res.movies.watch_list)
    //     }
    //     fetchNames()
    // }, [])

    // useEffect(() => {
    //     const fetchLists = async () => {
    //         if (listNames) {
    //             const fetchedLists = await Promise.all(
    //                 listNames.map((name) =>
    //                     userService.getListInfo(name.list_name).then((res) => res.list.watch_list)
    //                 )
    //             );
    //             fetchedLists?.forEach((list) => {
    //                 const fetchMoviesInList = async () => {
    //                     const moviesList = await Promise.all(
    //                         (list[0].movies).map((movie) =>
    //                             moviesService.getMovieInfo({ movieId: movie })
    //                         )
    //                     )
    //                     list[0].movies = moviesList
    //                 }
    //                 fetchMoviesInList()
    //             });
    //             setLists(fetchedLists)
    //         }
    //     };
    //     fetchLists();
    // }, [listNames]);

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
    }, []);

    console.log(lists)

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">My Watch Lists</h2>
                    <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                        Delete All
                    </button>
                </div>

                {lists?.map((list, idx) => (
                    <div className="my-16" key={idx}>
                        <h3 className="text-l font-bold">
                            {list?.list_name}
                        </h3>
                        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 min latest-movie">
                            {list?.movies.map((movie, index) => (
                                <MovieItem key={index} movie={movie} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SideBar>
    );
}

export default MoviesList;
import { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from '../../features/movies/moviesSlice'
import { toast } from "react-toastify";
import { userService } from '../../features/user/userService';
import "./style.scss"

function WatchMoviePage() {
    const dispatch = useDispatch()
    let nameMovie = useParams()
    const movie = useSelector(state => state.movies.movies[0])
    const [play, setPlay] = useState(false)

    useEffect(() => {
        dispatch(getMovies({ name: nameMovie.name }))
    }, [dispatch, nameMovie])

    const handleAddToFavorite = async (movieId) => {
        const res = await userService.addToFavorite(movieId);
        if (res.message)
            toast.success("Add to favorite successfully", { autoClose: 1500 });
    }


    return (
        <Layout>
            <div className='container mx-auto bg-dry p-6 mb-12'>
                <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
                    <Link className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray" to={`movie/${movie?.name}`}>
                        <FaArrowLeft />
                        {movie?.name}
                    </Link>
                    <div className="flex-btn sm:w-auto w-full gap-5">
                        <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
                            <FaHeart onClick={() => handleAddToFavorite(movie._id)} />
                        </button>
                        <button className="bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm">
                            <FaCloudDownloadAlt />
                            Download
                        </button>
                    </div>
                </div>

                {
                    play ? (
                        // <iframe
                        //     title={movie?.name}
                        //     width="100%"
                        //     height="100%"
                        //     src={movie?.videoUrl}
                        //     allowFullScreen
                        //     className='rounded video-play'
                        // ></iframe>
                        <iframe
                            width="560"
                            height="315"
                            src={`${movie?.videoUrl}?&autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    ) : <div className="w-full h-screen rounded-lg overflow-hidden relative">
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
                            <button className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl"
                                onClick={() => setPlay(true)}>
                                <FaPlay />
                            </button>
                        </div>
                        <img src={movie?.image} alt={movie?.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                }
            </div>
        </Layout>
    )
}

export default WatchMoviePage
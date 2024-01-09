import { Link } from "react-router-dom";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes.js";
import { userService } from "../../features/user/userService.js";
import { toast } from "react-toastify";
import PropTypes from "prop-types"
import { MdDelete } from "react-icons/md";
import './style.scss'

const MovieItem = ({ movie, listName }) => {
    const handleDeleteFromList = async (movieId) => {
        const res = await userService.deleteFromList(listName, movieId);
        if (res.message === "Deleted from list")
            toast.success("Deleted from list", { autoClose: 1500 });
        else
            toast.error("Something went wrong", { autoClose: 1500 });
    }
    return (
        <div>
            <div className="border border-border p-1 w-full h-full hover:scale-95 transitions relative rounded overflow-hidden">
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
                        <MdDelete onClick={() => handleDeleteFromList(movie._id)} />
                    </button>
                </div>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    movie: moviePropTypes.isRequired,
    listName: PropTypes.string.isRequired
};

export default MovieItem;

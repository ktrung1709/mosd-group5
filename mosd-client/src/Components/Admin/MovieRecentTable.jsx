import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes";
import { userPropTypes } from "../../PropTypes/UserPropTypes";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// rows
const Rows = (movie, i, admin) => {
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={movie?.image}
                        alt={movie?.name}
                    />
                </div>
            </td>
            <td className={`${Text} truncate`}>{movie?.name}</td>
            <td className={`${Text}`}>{movie?.categories[0]} , {movie?.categories[1]}</td>
            <td className={`${Text}`}>{movie?.language}</td>
            <td className={`${Text}`}>{movie?.year}</td>
            <td className={`${Text}`}>{movie?.time}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                {admin ? (
                    <>
                        <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
                            Edit <FaEdit className="text-green-500" />
                        </button>
                        <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
                            <MdDelete />
                        </button>
                    </>
                ) : (
                    <>
                        {/* <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
                            <MdDelete onClick={() => { handleDelete(movie?._id) }} />
                        </button> */}
                        <Link
                            to={`/movie/${movie?.name}`}
                            className="bg-subMain text-white rounded flex-colo w-6 h-6"
                        >
                            <GoEye />
                        </Link>
                    </>
                )}
            </td>
        </tr>
    );
};

// table
function MovieListTable({ data, admin }) {
    return (
        <div className="overflow-x-scroll overflow-hidden relative w-full">
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className="bg-dryGray">
                        <th scope="col" className={`${Head}`}>
                            Poster
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Title
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Category
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Language
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Year
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Time
                        </th>
                        <th scope="col" className={`${Head} text-end`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                    {data.map((movie, i) => Rows(movie, i, admin))}
                </tbody>
            </table>
        </div>
    );
}

MovieListTable.propTypes = {
    data: moviePropTypes.isRequired,
    admin: userPropTypes.isRequired
}

export default MovieListTable;

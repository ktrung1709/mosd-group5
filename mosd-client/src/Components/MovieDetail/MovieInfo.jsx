import { useEffect, useState } from "react";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes.js";
import { SlCalender } from "react-icons/sl";
import { TbClockHour9 } from "react-icons/tb";
import { BiSolidRightArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { RiMenuAddFill } from "react-icons/ri";
import { userService } from "../../features/user/userService.js";
import { toast } from "react-toastify";
import './style.scss'
import { IoAddCircleOutline, IoCreateOutline } from "react-icons/io5";

const MovieInfo = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [userLists, setUserLists] = useState([])
  const [newListName, setNewListName] = useState("");
  const [isNewList, setIsNewList] = useState(false)

  useEffect(() => {
    const fetchUserList = async () => {
      const res = await userService.getLists();
      if (res?.movies?.watch_list)
        setUserLists(res?.movies?.watch_list)
    }
    fetchUserList()
  }, [isNewList])

  const handleAddToList = async (listName, movieId) => {
    const res = await userService.addToList(listName, movieId);
    if (res?.message === "Added to list")
      toast.success("Add to list successfully", { autoClose: 1500 });
    else
      toast.error("Movie in list already", { autoClose: 1500 });
  }

  const handleCreateNewList = async (listName) => {
    const res = await userService.createList(listName);
    if (res.message === "Created list") {
      toast.success("Create list successfully", { autoClose: 1500 });
      setIsNewList(true)
    }
    else
      toast.error("List exists already", { autoClose: 1500 });
    console.log(res)
  }

  const handleButtonClick = () => {
    setIsNewList(false)
    if (newListName.trim() !== "") {
      handleCreateNewList(newListName);
      setNewListName("");
    }
  };

  const handleInputKeyPress = (e) => {
    setIsNewList(false)
    if (e.key === "Enter" && newListName.trim() !== "") {
      handleCreateNewList(newListName);
      setNewListName("");
    }
  };

  return (
    <div className="w-full xl:h-screen relative text-white">
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-500 text-center">
                    Add movie to list
                  </h3>
                </div>
                <div className="relative p-3 flex-auto text-gray-700">
                  {
                    userLists?.map((userList, index) =>
                      <div key={index} className="p-3 flex justify-between">
                        {userList?.list_name}
                        <IoAddCircleOutline onClick={() => handleAddToList(userList?.list_name, movie?._id)} className="w-6 h-6 hover:cursor-pointer" />
                      </div>
                    )
                  }
                  <div className="flex justify-between pl-1">
                    <input
                      type="text"
                      name="listName"
                      id="listName"
                      className="border w-10/12 h-8 pl-2"
                      placeholder="Create new list"
                      value={newListName}
                      onChange={(e) => setNewListName(e.target.value)}
                      onKeyDown={handleInputKeyPress}
                    />
                    <button
                      onClick={handleButtonClick}
                      className="ml-2 text-white bg-green-500 px-4 py-2 rounded"
                    >
                      <IoCreateOutline className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <img
        src={movie?.image}
        alt={movie?.name}
        className="w-full h-full hidden xl:inline-block object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={movie?.thumbnail}
              alt={movie?.name}
              className="w-full movie-thumbnail-detail object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  HD 4k
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {movie?.categories[0]}, {movie?.categories[1]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SlCalender />
                  <span className="text-sm font-medium">{movie?.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbClockHour9 />
                  <span className="text-sm font-medium">{movie?.time}</span>
                </div>
              </div>
              <p className="text-text text-sm leading-7">{movie?.desc}</p>
              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                <div className="col-span-1 flex-colo border-border ml-2">
                  {/* <button className="w-28 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    Add to list
                  </button> */}
                  {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="w-28 h-10 flex-colo rounded-lg bg-white bg-opacity-20" type="button">
                    Add to list
                  </button> */}
                  <button
                    className="w-24 h-10 rounded-lg bg-white bg-opacity-20 flex-rows"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Add <RiMenuAddFill className="ml-2" />
                  </button>
                </div>
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Language:
                    <span className="ml-2 truncate">{movie?.language}</span>
                  </p>
                </div>
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                  <NavLink
                    className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                    to={`/movie/watch/${movie?.name}`}
                  >
                    <BiSolidRightArrow />
                    Watch
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
              <button className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium">
                <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                  Download{" "}
                  <FiDownload style={{ transform: "rotate(270deg)" }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: moviePropTypes,
};

export default MovieInfo;

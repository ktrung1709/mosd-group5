import Title from "../Title/Title";
import { BsBookmarkStarFill } from "react-icons/bs";
import Star from "../StarRate/Star";
import { useEffect, useState } from "react";
import { Select } from "../Utils/Inputs";
import SingleStar from "../StarRate/SingleStar";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes";
import { feedbackService } from "../../features/feedback/feedbackService";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const MovieRates = ({ movie }) => {
    const [feedbacks, setFeedbacks] = useState([])
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('')
    const [isNewComment, setIsNewComment] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editedComment, setEditedComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const username = localStorage.getItem("username");
    const Ratings = [
        {
            title: "Rate number",
            value: 0,
        },
        {
            title: "1 Star",
            value: 1,
        },
        {
            title: "2 Star",
            value: 2,
        },
        {
            title: "3 Star",
            value: 3,
        },
        {
            title: "4 Star",
            value: 4,
        },
        {
            title: "5 Star",
            value: 5,
        },
        {
            title: "6 Star",
            value: 6,
        },
        {
            title: "7 Star",
            value: 7,
        },
        {
            title: "8 Star",
            value: 8,
        },
        {
            title: "9 Star",
            value: 9,
        },
        {
            title: "10 Star",
            value: 10,
        },
    ];

    useEffect(() => {
        const fetchFeedbacks = async () => {
            if (movie?._id) {
                const res = await feedbackService.getFeedbackByMovie(movie?._id);
                if (res?.length > 0)
                    setFeedbacks(res)
            }
        }
        fetchFeedbacks()
    }, [movie, isNewComment, isDelete, isEdit])

    const hanldeCreateFeedback = async (comment, rating) => {
        const res = await feedbackService.createFeedback(movie?._id, { comment: comment, rate: rating });
        if (res?.length > 0) {
            setFeedbacks(res)
        }
        if (res?.message === "Feedback already exists")
            toast.error("Feedback already exists", { autoClose: 1500 });
        setIsNewComment(true)

    }
    const handleButtonClick = () => {
        setIsNewComment(false)
        if (rating === null && comment === "")
            toast.error("Feedback must have at least one of comment or rate", { autoClose: 1500 });
        else
            hanldeCreateFeedback(comment, rating);
        setComment("");
        setRating(null)
    };
    const handleInputKeyPress = () => {
        setIsNewComment(false)
    };

    const formatTime = (timeString) => {
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };

        const formattedTime = new Intl.DateTimeFormat("en-US", options).format(new Date(timeString));

        return formattedTime;
    };

    const handleEdit = (feedbackId) => {
        const feedbackToEdit = feedbacks.find((feedback) => feedback?._id === feedbackId);
        setEditedComment(feedbackToEdit?.comment);
        setEditingCommentId(feedbackId);
        setIsEdit(false)
    };

    const handleSaveEdit = async (rate) => {
        const res = await feedbackService.updateFeedback(movie?._id, { comment: editedComment, rate: rate });
        console.log(res)
        if (res?._id) {
            setFeedbacks(res);
            toast.success("Comment edited", { autoClose: 1500 });
            setIsEdit(true)
        } else {
            toast.error("Something went wrong", { autoClose: 1500 });
        }
        setEditingCommentId(null);
        setEditedComment("");
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setEditedComment("");
    };

    const handleDelete = async () => {
        const res = await feedbackService.deleteFeedback(movie?._id);
        if (res?.acknowledged) {
            setFeedbacks(res)
            setIsDelete(true)
            toast.success("Feedback deleted", { autoClose: 1500 });
        }
        else
            toast.error("Something went wrong", { autoClose: 1500 });
    };
    return (
        <div className="my-12">
            <Title title="Reviews" Icon={BsBookmarkStarFill} />
            <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
                {/* write review */}
                <div className="xl:col-span-2 w-full flex flex-col gap-8">
                    <h3 className="text-xl text-text font-semibold">
                        Review {movie?.name}
                    </h3>
                    <p className="text-sm leading-7 font-medium text-border">
                        Write a review for this movie. It will be posted on this page.
                    </p>
                    <div className="text-sm w-full">
                        <Select
                            label="Select Rating"
                            options={Ratings}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <div className="flex mt-4 text-lg gap-2 text-star">
                            <Star value={rating} />
                        </div>
                    </div>
                    <div className="text-sm w-full">
                        <label className="text-border font-semibold">Comment</label>
                        <textarea
                            className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
                            placeholder="Make it short and sweet ..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            onKeyDown={handleInputKeyPress}
                        ></textarea>
                    </div>
                    <button className="bg-subMain text-white py-3 w-full flex-colo rounded" onClick={handleButtonClick}>Submit</button>
                </div>
                {/* REVIEWS */}
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews</h3>
                    <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 max-h-96 overflow-y-auto" >
                        {
                            feedbacks?.length > 0 ?
                                feedbacks?.map((feedback) => (<>
                                    <div key={feedback?._id} className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg" >
                                        <div className="col-span-2 bg-main hidden md:block">
                                            <img
                                                src="/image/avatar.png"
                                                alt={feedback?.user?.username}
                                                className="w-full h-24 rounded-lg object-cover"
                                            />
                                        </div>
                                        <div className="col-span-7 flex flex-col gap-2">
                                            <h2>{feedback?.user?.username}</h2>
                                            <p className="text-xs font-medium">{formatTime(feedback?.time)}</p>
                                            {editingCommentId === feedback?._id ? (
                                                <textarea
                                                    className="w-full h-20 mt-2 p-2 bg-main border border-border rounded"
                                                    value={editedComment}
                                                    onChange={(e) => setEditedComment(e.target.value)}
                                                ></textarea>
                                            ) : (
                                                <p className="text-sm leading-6 font-medium text-text">{feedback?.comment}</p>
                                            )}
                                        </div>
                                        <div className="col-span-2 flex flex-rows border-l border-border text-sm gap-1 text-star">
                                            <div className="text-star pt-0.5">{feedback?.rate}</div>
                                            <SingleStar value={1} />
                                        </div>
                                        {feedback?.user?.username === username && (
                                            <div className="col-span-1 flex flex-col items-center border-b-0 text-sm gap-3 text-star w-full justify-center">
                                                {editingCommentId === feedback?._id ? (
                                                    <>
                                                        <button onClick={() => handleSaveEdit(feedback?.rate)}>Save</button>
                                                        <button onClick={() => handleCancelEdit()}>Cancel</button>
                                                    </>
                                                ) : (
                                                    <button onClick={() => handleEdit(feedback?._id)}><FiEdit3 /></button>
                                                )}
                                                {
                                                    editingCommentId === feedback?._id ? <></>
                                                        :
                                                        <button onClick={() => handleDelete(feedback?.id)}>
                                                            <FaTrashAlt />
                                                        </button>
                                                }

                                            </div>
                                        )}
                                    </div>
                                </>
                                )) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieRates.propTypes = {
    movie: moviePropTypes,
};


export default MovieRates;
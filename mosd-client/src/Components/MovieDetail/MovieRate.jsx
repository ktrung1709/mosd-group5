import Title from "../Title/Title";
import { BsBookmarkStarFill } from "react-icons/bs";
import Star from "../StarRate/Star";
import { useState } from "react";
import { Message, Select } from "../Utils/Inputs";
import { UsersData } from "../../Data/UserData";
import SingleStar from "../StarRate/SingleStar";
import { moviePropTypes } from "../../PropTypes/MoviePropTypes";


const MovieRates = ({ movie }) => {
    const Ratings = [
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

    const [rating, setRating] = useState();
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
                    <Message label="Comment" placeholder="Make it short and sweet ..." />
                    <button className="bg-subMain text-white py-3 w-full flex-colo rounded">Submit</button>
                </div>
                {/* REVIEWS */}
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews</h3>
                    <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll" >
                        {UsersData.map((user, i) => (
                            <div key={i} className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg" >
                                <div className="col-span-2 bg-main hidden md:block">
                                    <img
                                        src={user?.image}
                                        alt={user?.fullname}
                                        className="w-full h-24 rounded-lg object-cover"
                                    />
                                </div>
                                <div className="col-span-8 flex flex-col gap-2">
                                    <h2>{user?.fullname}</h2>
                                    <p className="text-xs leading-6 font-medium text-text">
                                        {user?.message}
                                    </p>
                                </div>
                                <div className="col-span-2 flex flex-rows border-l border-border text-sm gap-1 text-star">
                                    <div className="text-star">{user?.rate}</div>
                                    <SingleStar value={1} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieRates.propTypes = {
    movie: moviePropTypes.isRequired,
};


export default MovieRates;
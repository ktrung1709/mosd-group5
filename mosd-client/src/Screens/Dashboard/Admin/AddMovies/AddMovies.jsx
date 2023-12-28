import { useEffect, useState } from "react";
import { Input, Message, Select, Uploader } from "../../../../Components/Utils/Inputs.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { CategoriesData } from "../../../../Data/CategoriesData";
import { ImUpload } from "react-icons/im";
import AddCast from "../../../../Components/Admin/AddCast.jsx";

function AddMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cast, setCast] = useState(null);

    useEffect(() => {
        if (modalOpen === false) {
            setCast();
        }
    }, [modalOpen]);

    return (
        <SideBar>
            <AddCast
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                cast={cast}
            />
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Create Movie</h2>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input
                        label="Movie Title"
                        placeholder="Name of the movie/series"
                        type="text"
                        bg={true}
                    />
                    <Input label="Hours" placeholder="2h30m" type="text" bg={true} />
                </div>

                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input
                        label="Language Used"
                        placeholder="English"
                        type="text"
                        bg={true}
                    />
                    <Input
                        label="Year of Release"
                        placeholder="2023"
                        type="number"
                        bg={true}
                    />
                </div>

                {/* IMAGES */}
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Poster */}
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">
                            Poster
                        </p>
                        <Uploader />
                        <div className="w-32 h-32 p-2 bg-main border border-border rounded">

                        </div>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <Message
                    label="Movie Description"
                    placeholder="Make it short and sweet"
                />
                {/* CATEGORY */}
                <div className="text-sm w-full">
                    <Select label="Movie Category" options={CategoriesData} />
                </div>

                {/* CASTS */}
                <div className="w-full grid lg:grid-cols-2 gap-6 items-start ">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
                    >
                        Add Cast
                    </button>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">

                    </div>
                </div>

                {/* SUBMIT */}
                <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
                    <ImUpload /> Publish Movie
                </button>
            </div>
        </SideBar>
    );
}

export default AddMovie;

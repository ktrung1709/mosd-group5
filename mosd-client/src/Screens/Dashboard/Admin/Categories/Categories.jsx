import { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import CategoryList from "../../../../Components/Admin/CategoryList.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { CategoriesData } from "../../../../Data/CategoriesData";
import AddCategory from "../../../../Components/Admin/AddCategory.jsx";

function Categories() {
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState();

    const OnEditFunction = (id) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        if (modalOpen === false) {
            setCategory();
        }
    }, [modalOpen]);

    return (
        <SideBar>
            <AddCategory
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                category={category}
            />
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Categories</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
                    >
                        <HiPlusCircle /> Create
                    </button>
                </div>

                <CategoryList
                    data={CategoriesData}
                    OnEditFunction={OnEditFunction}
                />
            </div>
        </SideBar>
    );
}

export default Categories;
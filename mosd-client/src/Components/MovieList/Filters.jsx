import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { HiSelector } from "react-icons/hi"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { getMovies } from "../../features/movies/moviesSlice";
import './style.scss'
const kindData = [
    {
        title: "- Kind -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "Movie" },
    { title: "Series" }
]

const categoryData = [
    {
        title: "- Category -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "Action" },
    { title: "Drama" },
    { title: "Romantic" },
    { title: "Horror" },
    { title: "Sci-Fi" },
    { title: "Adventure" },
    { title: "History" },
    { title: "Cartoon" },
    { title: "Crime" },
    { title: "Thriller" },
    { title: "Documentary" },
    { title: "Comedy" },
]

const yearData = [
    {
        title: "- Year -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "2023" },
    { title: "2022" },
    { title: "2021" },
    { title: "2020" },
    { title: "2019" },
    { title: "2018" },
    { title: "2017" },
    { title: "2016" },
    { title: "2015" },
    { title: "2014" },
    { title: "2013" },
    { title: "2012" },
    { title: "Before 2012" },
]

const languageData = [
    {
        title: "- Language -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "American" },
    { title: "Korean" },
    { title: "English" },
    { title: "Spanish" },
    { title: "Chinese" },
    { title: "Janapese" },
    { title: "French" },
    { title: "Other" },
]

const timeData = [
    {
        title: "- Time -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "0 - 30 mins" },
    { title: "30 mins - 60 mins" },
    { title: "60 mins - 90 mins" },
    { title: "90 mins - 120 mins" },
    { title: "120 mins - 180 mins" },
    { title: "More than 180 mins" },
]

const sortData = [
    {
        title: "- Sort by -",
        idDisabled: true,
    },
    { title: "All" },
    { title: "Time Update" },
    { title: "Time Release" },
    { title: "Rate" },
]


function Filters() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [kind, setKind] = useState(kindData[0]);
    const [year, setYear] = useState(yearData[0]);
    const [category, setCategory] = useState(categoryData[0]);
    const [langeuage, setLanguage] = useState(languageData[0]);
    const [time, setTime] = useState(timeData[0]);
    const [sort, setSort] = useState(sortData[0]);
    const [filterParam, setFilterParam] = useState("");

    const handleFilterChange = (selected) => {
        const updateParam = (paramName, paramValue) => {
            setFilterParam((prevFilterParam) => {
                let updatedFilterParam = prevFilterParam.replace(new RegExp(`&?${paramName}=[^&]*`), "");
                updatedFilterParam += (updatedFilterParam === "" ? "" : "&") + `${paramName}=${paramValue}`;

                return updatedFilterParam;
            });
        };
        if (kindData.includes(selected)) {
            setKind(selected);
            updateParam("kind", selected?.title);
        } else if (yearData.includes(selected)) {
            setYear(selected);
            updateParam("year", selected?.title);
        } else if (categoryData.includes(selected)) {
            setCategory(selected);
            updateParam("category", selected?.title);
        } else if (languageData.includes(selected)) {
            setLanguage(selected);
            updateParam("language", selected?.title);
        } else if (timeData.includes(selected)) {
            setTime(selected);
            updateParam("time", selected?.title);
        }
    };

    // useEffect(() => {
    //     if (category.title !== "All" || !category.title.includes('-'))
    //         dispatch(getMovies({ category: category.title }))
    //     if (category.title === "All")
    //         dispatch(getMovies())
    // }, [category.title, dispatch])

    useEffect(() => {
        if (filterParam?.length > 0) {
            let filterParams = ""
            if (filterParam[0] === "&") {
                filterParams = filterParam.slice(1)
            }
            navigate(`/movies/filter/${filterParams ? filterParams : filterParam}`)
        }
    }, [filterParam, navigate])

    useEffect(() => {
        handleFilterChange()
    }, [])

    const Filter = [
        {
            value: kind,
            onChange: handleFilterChange,
            items: kindData
        },
        {
            value: year,
            onChange: handleFilterChange,
            items: yearData
        },
        {
            value: category,
            onChange: handleFilterChange,
            items: categoryData
        },
        {
            value: langeuage,
            onChange: handleFilterChange,
            items: languageData
        },
        {
            value: time,
            onChange: handleFilterChange,
            items: timeData
        },
        {
            value: sort,
            onChange: setSort,
            items: sortData
        },
    ]

    return (
        <div className="my-6 bg-dry border text-dryGray border-gray-800 grid lg:grid-cols-6 grid-cols-3 lg:gap-12 gap-2 rounded p-6 filter-option">
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item?.value} onChange={item.onChange}>
                        <div className="relative">
                            <Listbox.Button className="relative border border-gray-800  w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                                <span className="block truncate">{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                    <HiSelector className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100">
                                <Listbox.Options className="filter-option-list absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {
                                        item.items.map((i, id) => (
                                            <Listbox.Option
                                                key={id}
                                                className={({ active }) => `relative cursor-default select-none py-2 pl-2 text-sm pr-4 ${active ? "bg-subMain text-white" : "text-main"} ${i.idDisabled ? 'text-gray-400 bg-gray-300' : ''}`}
                                                value={i}
                                                disabled={i.idDisabled}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {i.title}
                                                        </span>
                                                        {selected && (
                                                            <span className="absolute inset-y-3 w-11/12 flex flex-row-reverse items-center pl-3">
                                                                <FaCheck className="w-4 h-4" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }
        </div>
    )
}


export default Filters
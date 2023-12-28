import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { HiSelector } from "react-icons/hi"
import './style.scss'
const kindData = [
    {
        title: "- Kind - ",
        idDisabled: true,
    },
    { title: "All" },
    { title: "Movie" },
    { title: "Serie" }
]

const categoryData = [
    {
        title: "- Category - ",
        idDisabled: true,
    },
    { title: "All" },
    { title: "Action" },
    { title: "Drama" },
    { title: "Romantic" },
    { title: "Horror" },
    { title: "Science Fiction" },
    { title: "Adventure" },
    { title: "Comedy" },
    { title: "Cartoon" },
    { title: "Other" },
]

const yearData = [
    {
        title: "- Year - ",
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
    const [kind, setKind] = useState(kindData[0]);
    const [year, setYear] = useState(yearData[0]);
    const [category, setCategory] = useState(categoryData[0]);
    const [langeuage, setLanguage] = useState(languageData[0]);
    const [time, setTime] = useState(timeData[0]);
    const [sort, setSort] = useState(sortData[0]);

    const Filter = [
        {
            value: kind,
            onChange: setKind,
            items: kindData
        },
        {
            value: year,
            onChange: setYear,
            items: yearData
        },
        {
            value: category,
            onChange: setCategory,
            items: categoryData
        },
        {
            value: langeuage,
            onChange: setLanguage,
            items: languageData
        },
        {
            value: time,
            onChange: setTime,
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
                    <Listbox key={index} value={item.value} onChange={item.onChange}>
                        <div className="relative">
                            <Listbox.Button className="relative border border-gray-800  w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                                <span className="block truncate">{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                    <HiSelector className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100">
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {
                                        item.items.map((i, id) => (
                                            <Listbox.Option
                                                key={id}
                                                className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"} ${i.idDisabled ? 'text-gray-400 bg-gray-300' : ''}`}
                                                value={i}
                                                disabled={i.idDisabled}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {i.title}
                                                        </span>
                                                        {selected && (
                                                            <span className="absolute inset-y-3 left-0 flex items-center pl-3">
                                                                <FaCheck className="w-5 h-5" aria-hidden="true" />
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
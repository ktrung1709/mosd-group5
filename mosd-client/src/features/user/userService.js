import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getInfo = async () => {
    const res = await axios.get(`${base_url}user/info`, config);
    if (res.data)
        return res.data
}

const getMovies = async () => {
    const res = await axios.get(`${base_url}user/movies`, config);
    if (res.data)
        return res.data
}

const getFavorite = async () => {
    const res = await axios.get(`${base_url}user/favorite`, config);
    if (res.data)
        return res.data
}


const addToFavorite = async (movieId) => {
    const res = await axios.put(`${base_url}user/favorite/${movieId}`, null, config);
    if (res.data)
        return res.data
}

const deleteFromFavorite = async (movieId) => {
    const res = await axios.delete(`${base_url}user/favorite/${movieId}`, config);
    if (res.data)
        return res.data
}


const getRecent = async () => {
    const res = await axios.get(`${base_url}user/recent`, config);
    if (res.data)
        return res.data
}


const addToRecent = async (movieId) => {
    const res = await axios.put(`${base_url}user/recent/${movieId}`, null, config);
    if (res.data)
        return res.data
}

const deleteFromRecent = async (movieId) => {
    const res = await axios.delete(`${base_url}user/recent/${movieId}`, config);
    if (res.data)
        return res.data
}

const getListInfo = async (listName) => {
    const res = await axios.get(`${base_url}user/list/${listName}`, config);
    if (res.data)
        return res.data
}


const createList = async (listName) => {
    const res = await axios.put(`${base_url}user/list/${listName}`, null, config);
    if (res.data)
        return res.data
}

const deleteList = async (listName) => {
    const res = await axios.delete(`${base_url}user/list/${listName}`, config);
    if (res.data)
        return res.data
}

const getLists = async () => {
    const res = await axios.get(`${base_url}user/lists`, config);
    if (res.data)
        return res.data
}

const addToList = async (listName, movieId) => {
    const res = await axios.put(`${base_url}user/list/${listName}/${movieId}`, null, config);
    if (res.data)
        return res.data
}

const deleteFromList = async (listName, movieId) => {
    const res = await axios.delete(`${base_url}user/list/${listName}/${movieId}`, config);
    if (res.data)
        return res.data
}


export const userService = {
    getMovies,
    getInfo,
    getFavorite,
    addToFavorite,
    deleteFromFavorite,
    getRecent,
    addToRecent,
    deleteFromRecent,
    getListInfo,
    createList,
    deleteList,
    getLists,
    addToList,
    deleteFromList
};

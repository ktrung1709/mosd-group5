import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getInfo = async (userId) => {
    const res = await axios.get(`${base_url}category/getAll`, {
        user: userId
    }, config);
    if (res.data)
        return res.data
}

const addToFavorite = async (movieId) => {
    const res = await axios.put(`${base_url}user/favorite/${movieId}`, null, config);
    if (res.data)
        return res.data
}

export const userService = {
    getInfo,
    addToFavorite
};

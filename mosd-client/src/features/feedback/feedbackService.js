import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const createFeedback = async (movieId, feedbackData) => {
    const res = await axios.post(`${base_url}feedback/${movieId}`, feedbackData, config);
    if (res.data)
        return res.data
}

const getFeedbackByMovie = async (movieId) => {
    const res = await axios.get(`${base_url}feedback/${movieId}`, config);
    if (res.data)
        return res.data
}

const updateFeedback = async (movieId, feedbackData) => {
    const res = await axios.put(`${base_url}feedback/${movieId}`, feedbackData, config);
    if (res.data)
        return res.data
}

const deleteFeedback = async (movieId) => {
    const res = await axios.delete(`${base_url}feedback/${movieId}`, config);
    if (res.data)
        return res.data
}

export const feedbackService = {
    createFeedback,
    getFeedbackByMovie,
    updateFeedback,
    deleteFeedback
}
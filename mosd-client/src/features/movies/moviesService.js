import axios from "axios";
import { base_url } from "../../utils/baseUrl";
// import { config } from "../../utils/axiosConfig";

const getMovies = async (movieData) => {
    const res = await axios.get(`${base_url}movie/find`, {
        params: movieData
    });
    if (res.data)
        return res.data
}

export const moviesService = {
    getMovies
};

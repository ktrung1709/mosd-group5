import axios from "axios";
import { base_url } from "../../utils/baseUrl";
// import { config } from "../../utils/axiosConfig";

const getCast = async (castData) => {
    console.log(castData)
    const res = await axios.get(`${base_url}cast/getCast`, {
        body: castData
    });
    if (res.data)
        return res.data
}

export const castService = {
    getCast
};

import axios from "axios";
import { base_url } from "../../utils/baseUrl";
// import { config } from "../../utils/axiosConfig";

const getCategories = async (categoryData) => {
    
    const res = await axios.get(`${base_url}category/getAll`, {
        body: categoryData
    });
    if (res.data)
        return res.data
}

export const categoryService = {
    getCategories
};

import axios from "axios";
import { base_url } from "./baseUrl";
import { setItemWithExpiration } from "./localStorage";

export const apiForgotPassword = async (email) => {
    const res = await axios.post(`${base_url}auth/forgot-password`, { email });
    console.log("res: ", res)
    if (res.data.token) {
        setItemWithExpiration('resetPasswordToken', res.data.token, 5)
        return res.data;
    }
};

export const apiResetPassword = async (id, token, password) => {
    const res = await axios.post(`${base_url}auth/reset-password`, { id, token, password });
    console.log("res: ", res)
    if (res.data) {
        return res.data;
    }
}
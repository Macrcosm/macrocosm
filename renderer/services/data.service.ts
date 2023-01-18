import axios from "axios";
export const generateImageApi = async (data) => {
    return axios.post("http://localhost:5000/", {...data}, {
        withCredentials: false,
        headers: {'Content-Type': 'application/json'},
    });
}

export const getCurrentImagePercent = async () => {
    return axios.get("http://localhost:5000/", {
        withCredentials: false,
        headers: {'Content-Type': 'application/json'},
    });
}
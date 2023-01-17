import axios from "axios";

export const generateImageApi = async (data) => {
    return axios.post("http://localhost:5000/", {...data}, {
        withCredentials: false,
        headers: {'Content-Type': 'application/json'},
        onDownloadProgress: progressEvent => {
            let progress = (progressEvent.loaded / progressEvent.total) * 100;
            console.log('progress', progress);
          }
    
    });
}
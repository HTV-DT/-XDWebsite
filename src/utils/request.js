import axios from "axios";

const request = axios.create({
    baseURL: 'https://localhost:8080/api/auth/',
});

export const get = async (path, option = {}) => {
    const response = await axios.get(path, option);
    return response.data;
}

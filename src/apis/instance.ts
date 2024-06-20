import axios from "axios";

const instance = axios.create({
    baseURL: "https://sosomarket-api.bubaum.dev",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

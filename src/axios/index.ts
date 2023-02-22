import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_YOUTUBE_API_URL,
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY
  },
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;

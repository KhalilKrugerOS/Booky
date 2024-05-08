import axios from "axios";

export default axios.create({
  baseURL: "https://5ee5-102-157-239-99.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});

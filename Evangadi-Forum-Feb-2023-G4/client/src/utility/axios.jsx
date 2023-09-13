import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4500", // api url
  // baseURL: "https://gleaming-toad-shawl.cyclic.cloud/", // api url
  baseURL: "https://evangadi-forum-server-render.onrender.com",

  withCredentials: true,
});

export default instance;
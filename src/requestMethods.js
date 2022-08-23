import axios from "axios";

const BASE_URL = "https://whitecoatmanila.herokuapp.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";



let TOKEN;

if (localStorage.getItem("persist:root")) {
  const user = JSON.parse(localStorage.getItem("persist:root")).user;
  const currentUser = user && JSON.parse(user).currentUser;
  TOKEN = currentUser && currentUser.accessToken;  
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

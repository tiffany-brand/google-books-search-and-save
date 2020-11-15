import { io } from "socket.io-client";
// const socket = io.connect(process.env.PORT || "http://localhost:3001");
const socket = io.connect("https://gb-search-n-save.herokuapp.com/");
export default socket;
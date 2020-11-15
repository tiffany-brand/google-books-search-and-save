import { io } from "socket.io-client";
const socket = io.connect(process.env.PORT || "http://localhost:3001");
console.log(process.env.PORT);
export default socket;
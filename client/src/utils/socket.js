// sets up Socket.io connection with server
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001"); // use this line when running locally
// const socket = io.connect("https://gb-search-n-save.herokuapp.com/"); // use this when deployed on Heroku
export default socket;
import { setName } from "../index.js";

const socket = io("https://cafe-api-zt84.onrender.com");

socket.emit("connection");

socket.on("currentName", name => {
    setName(name);
})

socket.on("new_name", name => {
    setName(name);
})
import { setName } from "../index.js";

const socket = io("https://cafe-api-zt84.onrender.com");

socket.emit("connection");

socket.on("currentName", person => {
    setName(person.nickName);
})

socket.on("new_name", person => {
    setName(person.nickName);
})
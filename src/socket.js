import { setName } from "../index.js";

const socket = io("https://cafe-api-zt84.onrender.com");

socket.emit("connection");

socket.on("currentName", person => {
    setName(person.name);
})

socket.on("new_name", person => {
    setName(person.name);
})
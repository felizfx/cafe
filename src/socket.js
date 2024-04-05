import { setName } from "../index.js";

const socket = io("http://localhost:8080");

socket.emit("connection");

socket.on("currentName", name => {
    setName(name);
})

socket.on("new_name", name => {
    setName(name);
})
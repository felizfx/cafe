import { setName } from "../index.js";

const socket = io("http://localhost:8080");

socket.emit("connection", () => {
  console.log("Connected to server");
});

socket.on("new_name", (name) => {
    setName(name);
})
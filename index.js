import dom from "./src/dom.js";

let count = 0;
var nameInterval;

const setName = (name) => {
    dom.name.textContent = name.charAt(0).toUpperCase() + name.slice(1);
}

export { setName };
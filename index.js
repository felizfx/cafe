import dom from "./src/dom.js";
import emojis from "./src/emojis.js";

let count = 0;
var nameInterval;

const setName = (name) => {
    dom.name.textContent = name.charAt(0).toUpperCase() + name.slice(1);
}

dom.emoji.addEventListener("click", () => {
    dom.emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];;
})

export { setName };
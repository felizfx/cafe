import dom from "./src/dom.js";
import names from "./src/names.js";

let count = 0;
var nameInterval;

const setName = (name) => {
    dom.name.textContent = name.charAt(0).toUpperCase() + name.slice(1);
}

const person = (callback) => {
    if(count === names.length - 1) count = 0;
    callback(names[count]);
    count++;

    timer().stop();
    setTimeout(() => {
        timer().start();
    }, 60000);
}

const timer = () => {
    return {
        start() {
            nameInterval = setInterval(() => {
                if(new Date().getHours() === 16) person(setName);
            }, 5000);
        },
        stop() {
            clearInterval(nameInterval)
        }
    }
}

timer().start();
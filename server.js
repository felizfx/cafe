import app from "./src/app.js";

const PORT_FRONT = 3000;

app.listen(PORT_FRONT, () => {
    console.log(`Frontend running on port ${PORT_FRONT}`);
});
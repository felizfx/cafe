import express from "express";
import url from "url";
import path from "path";

const app = express();

const currentPath = url.fileURLToPath(import.meta.url);
app.use(express.static(path.join(currentPath, "../..", "public")));

app.get("/teste", (req, res) => {
    res.json({ teste: " 123" });
});

export default app;
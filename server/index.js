import express from "express";
import cors from "cors";
import { shoes } from "./data/shoes.js";

const app = express();
const PORT = 5000;

const testData = {
    name: "Gabriel"
}

app.use(cors());

app.get("/", (req, res) => {
    res.send("Root")
})

app.get("/api/shoes", (req, res) => {
    res.json(shoes);
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})
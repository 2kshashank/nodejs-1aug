import express, { json } from "express";
import axios from "axios";

const Router = express.Router();

Router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Internal server error.");
    }
    
});

export default Router;

import express, { json } from "express";

import { UserModel } from "../models/users.mjs"

const Router = express.Router();
Router.get("/", async (req, res) => {
    try {
        
        const users = await UserModel.find();
        res.json(users);

    } catch (error) {
        res.status(500).send("Internal server error.");
    }
    
});

export default Router;

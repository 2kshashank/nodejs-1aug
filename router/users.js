import express, { json } from "express";

import { UserModel } from "../models/users.mjs"

const Router = express.Router();
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        // res.json(users);
        res.render("users", { users : users });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

Router.get("/add-user", (req, res)=>{
    res.render("add-user");
})

// /users
Router.post("/add-user", async (request, response) => {
    try {
        const body = request.body;
        
        const newUser = new UserModel(body)

        await newUser.save()
        
        response.redirect("/users")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

export default Router;

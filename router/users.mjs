import express, { json } from "express";
import axios from "axios";
import { MongoClient } from "mongodb";

const dbUrl = "mongodb://127.0.0.1:27017"
const client = new MongoClient(dbUrl);

const Router = express.Router();
Router.get("/", async (req, res) => {
    try {
        // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // res.json(response.data);
        await client.connect();
        const db = client.db("edureka");
        const collection = db.collection("users");

        const docs = await collection.find().toArray()

        // res.render("users", { users : docs })

        res.json(docs)

    } catch (error) {
        res.status(500).send("Internal server error.");
    }
    
});

export default Router;

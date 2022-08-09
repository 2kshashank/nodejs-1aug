import { ObjectID } from "bson";
import express from "express";
import { createClient } from "../utils/db.mjs";
const Router = express.Router();

// GET /products/ ✔
// GET /products/:id ✔
// POST /products/
// DELETE /products/:id
// PUT /products/:id

Router.get("/", async (request, response) => {
  try {
    const client = createClient();
    await client.connect();
    const db = client.db("edureka");
    const collection = db.collection("products");

    const docs = await collection.find().toArray();
    client.close();
    response.json(docs);
  } catch (error) {
    response.status(500).json({ message: "Internal server error." });
  }
});

Router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const client = createClient();
    await client.connect();
    const db = client.db("edureka");
    const collection = db.collection("products");

    const doc = await collection.findOne({ _id: ObjectID(id) });
    client.close();

    if (doc === null) {
      response.status(404).json({ message: "product not found." });
    } else {
      response.json(doc);
    }
  } catch (error) {
    response.status(500).json({ message: "Internal server error." });
  }
});

Router.post("/", async (request, response) => {
  try {
    const body = request.body;
    const client = createClient();
    await client.connect();
    const db = client.db("edureka");
    const collection = db.collection("products");
    const insertedDoc = await collection.insertOne(body);
    client.close();

    response.json({ ...body, _id: insertedDoc.insertedId });
  } catch (error) {
    response.status(500).json({ message: "Internal server error." });
  }
});

Router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const body = request.body;

    const client = createClient();
    await client.connect();
    const db = client.db("edureka");
    const collection = db.collection("products");

    const doc = await collection.updateOne(
      { _id: ObjectID(id) },
      { $set: body }
    );
    client.close();
    response.json({ message: "product updated successfully" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error." });
  }
});

Router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const client = createClient();
    await client.connect();
    const db = client.db("edureka");
    const collection = db.collection("products");

    const doc = await collection.deleteOne({ _id: ObjectID(id) });
    client.close();

    response.json({ message: "Product deleted succesfully." });
  } catch (error) {
    response.status(500).json({ message: "Internal server error." });
  }
});

export default Router;

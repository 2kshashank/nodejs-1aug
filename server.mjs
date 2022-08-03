import express from "express";

const app = express();

// POST         Create
// GET          Read
// PUT PATCH    Update 
// DELETE       Delete

app.get("/", (request, response)=>{
    response.send("Hello World!!!");
})

app.get("/products", (request, response)=>{
    response.send("This is the products page.");
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})
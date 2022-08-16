import "dotenv/config"
import express from "express";
import HomepageRouter from "./router/homepage"
import ProductsRouter from "./router/products"
import UsersRouter from "./router/users"
import UsersAPIRouter from "./router/api-user"
import { createServer } from "http"

// Socket.io
import { Server } from "socket.io"

import * as graphql from "express-graphql"

import "./utils/mongoose-db.mjs"
import { Schema } from "./graphql/schema/query.mjs";

const app = express();
const server = createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.urlencoded( { extended : true } ))
app.use(express.static("public"));
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000



// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/products", ProductsRouter);
app.use("/users", UsersRouter);
app.use("/api/users", UsersAPIRouter);

app.get("/chat", (req, res)=>{
  res.render("chat")
})


app.use("/graphql", graphql.graphqlHTTP({
    graphiql : true,
    schema : Schema
}))


io.on("connection", (socket)=>{
  socket.on("chat-message", (msg)=>{
    // console.log(`User sent message - ${msg}`)
    // Group Chat with all users on server.
    io.emit("message", msg)
  })
  
})


server.listen(PORT, ()=>{
  console.log("Application started at 3000")
})
import "dotenv/config";
import express from "express";
import HomepageRouter from "./router/homepage";
import ProductsRouter from "./router/products";
import UsersRouter from "./router/users";
import UsersAPIRouter from "./router/api-user";
import { createServer } from "http";

// Socket.io
import { Server } from "socket.io";

import * as graphql from "express-graphql";

import "./utils/mongoose-db.mjs";
import { Schema } from "./graphql/schema/query.mjs";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/products", ProductsRouter);
app.use("/users", UsersRouter);
app.use("/api/users", UsersAPIRouter);

app.get("/chat", (req, res) => {
  res.render("chat");
});

app.use(
  "/graphql",
  graphql.graphqlHTTP({
    graphiql: true,
    schema: Schema,
  })
);

io.on("connection", (socket) => {
  socket.on("chat-message", (msg) => {
    // console.log(`User sent message - ${msg}`)

    // Group Chat with all users on server.
    // io.emit("message", msg)

    // Group chat - except the sender.

    if (socket.data.username && msg) {
      socket.broadcast.emit("message", {
        message: msg,
        user: socket.data.username,
      });
    }
  });

  socket.on("login", (msg) => {
    socket.data = { username: msg };
    socket.broadcast.emit("newuser", msg);
  });

  socket.on("typing", (typing) => {
    socket.broadcast.emit("typingnow", { typing, username: socket.data.username });
  });
});

server.listen(PORT, () => {
  console.log("Application started at 3000");
});

export { server };

import express from "express";
import HomepageRouter from "./router/homepage"
import ProductsRouter from "./router/products"
import UsersRouter from "./router/users"

import * as graphql from "express-graphql"

import "./utils/mongoose-db.mjs"
import { Schema } from "./graphql/schema/query.mjs";

const app = express();

app.use(express.json())
app.use(express.urlencoded( { extended : true } ))
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000



// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/products", ProductsRouter);
app.use("/users", UsersRouter);

app.use("/graphql", graphql.graphqlHTTP({
    graphiql : true,
    schema : Schema
}))


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

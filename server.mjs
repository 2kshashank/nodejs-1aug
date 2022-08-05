import express from "express";
import HomepageRouter from "./router/homepage.mjs"
import ProductsRouter from "./router/products.mjs"

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000



// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/products", ProductsRouter);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

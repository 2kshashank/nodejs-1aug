import express from "express";

const Router = express.Router();

// /products + /
// /products/
// /products

Router.get("/", (request, response) => {
  response.send("This is the products page.");
});

// /products/laptop/
// /products/laptop
Router.get("/laptop", (request, response) => {
    response.send("This is the products page.");
  });
  

export default Router;

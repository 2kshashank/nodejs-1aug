import express from "express";
import https from "https";

const Router = express.Router();

Router.get("/", (req, res) => {
  https.get(
    {
      hostname: "jsonplaceholder.typicode.com",
      protocol: "https:",
      path: "/users",
    },
    (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data = data + chunk;
      });

      response.on("close", () => {
        res.json(data);
      });
    }
  );

  
});

export default Router;

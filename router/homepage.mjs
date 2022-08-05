import express from "express";

const Router = express.Router();

Router.get("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    response.setHeader("content-type", "application/json");
    response.send(data);
  });
});

Router.post("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    const content = JSON.parse(data);

    content.push(request.body);

    fs.writeFile("./phonebook.json", JSON.stringify(content), () => {
      response.send(content);
    });
  });
});

export default Router;

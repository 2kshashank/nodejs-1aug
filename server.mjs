import express from "express";
import fs from "fs";

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.get("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    response.setHeader("content-type", "application/json");
    response.send(data);
  });
});

app.post("/", (request, response) => {
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

app.get("/products", (request, response) => {
  response.send("This is the products page.");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

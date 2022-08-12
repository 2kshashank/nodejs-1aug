import express, { json } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.mjs";
import jwt from "jsonwebtoken";

const SECRET_KEY =
  "84092ufkhasdfy93274fjagjfhadf968d687tug43jh5gkfsd686s7dfsdgfhsdjf";

const Router = express.Router();
Router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    // res.json(users);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

// /users
Router.post("/", async (request, response) => {
  try {
    const body = request.body;
    const { email, firstName, lastName, username, password } = body;

    if (!validator.isEmail(email)) {
      response.status(401).send("Email is not correct.");
      return false;
    }

    if (validator.isEmpty(username)) {
      response.status(401).send("Username not provided.");
      return false;
    }

    if (validator.isEmpty(firstName)) {
      response.status(401).send("Firstname not provided.");
      return false;
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    const doc = await newUser.save();

    response.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

Router.post("/login", async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const user = await UserModel.findOne({ email });
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign({ id: user._id }, SECRET_KEY, {
      expiresIn: 3600,
      algorithm: "HS512",
    });
    res.json({ message: `welcome ${email}`, token });
  } else {
    res.status(401).json({ message: "email and password are not matching." });
  }
});

Router.get("/whoami", async (req, res)=>{

    const { headers } = req;
    const { authorization } = headers;
    try {
        const payload = jwt.verify(authorization, SECRET_KEY)
        const user = await UserModel.findById(payload.id, "-password -__v");
        res.send(user);
    } catch (error) {
        res.status(401).json({ message : "invalid user." })
    }

    

})

export default Router;

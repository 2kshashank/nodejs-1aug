import express, { json } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.mjs";
import jwt from "jsonwebtoken";
import AuthMiddleware from "../middlewares/auth.js";
import assert from "assert"

const Router = express.Router();
Router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    // res.json(users);
    // console.log(users);
    // assert.equal(users.length > 5, true, "Invalid user count.")
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
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: 3600,
      algorithm: "HS512",
    });
    res.json({ message: `welcome ${email}`, token });
  } else {
    res.status(401).json({ message: "email and password are not matching." });
  }
});

Router.get("/whoami", AuthMiddleware , async (req, res)=>{
    try {
        const { user } = req
        res.send(user);
    } catch (error) {
        res.status(401).json({ message : "invalid user." })
    }
})

export default Router;

import jwt from "jsonwebtoken";
import { UserModel } from "../models/users.mjs";

export default async function AuthMiddleware(req, res, next){

    const { headers } = req;
    const { authorization } = headers;
    try {
        const payload = jwt.verify(authorization, process.env.SECRET_KEY)
        const user = await UserModel.findById(payload.id, "-password -__v");
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message : "not authorized." })
    }
    

}
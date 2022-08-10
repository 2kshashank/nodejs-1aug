import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserModel } from "../../models/users.mjs";
import { UserInputType, UserType } from "../types/user.mjs";

export const Mutation = new GraphQLObjectType({
    name : "Mutation", 
    fields : {
        addUser : {
            type : UserType,
            args : { user : { type : UserInputType } },
            resolve : (context, args)=>{
                const newUser = new UserModel(args.user);
                return newUser.save();
            }
        },
        deleteUser : {
            type : UserType,
            args : { id : { type : GraphQLString } },
            resolve : async (context, args)=>{
                await UserModel.findByIdAndDelete(args.id)
            }
        },
    }
})
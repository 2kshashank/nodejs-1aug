import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { UserModel } from "../../models/users.mjs";

const UserType = new GraphQLObjectType({
    name : "User",
    fields : {
        firstName : { type : GraphQLString },
        lastName : { type : GraphQLString },
        email : { type : GraphQLString },
        username : { type : GraphQLString },
        _id : { type : GraphQLString }
    }
})

const Query = new GraphQLObjectType({
    name : "Root",
    fields : {
        users : {
            type : GraphQLList(UserType),
            resolve : ()=>{
                return UserModel.find()
            }
        },
        user : {
            type : UserType,
            args : { id : { type : GraphQLString } },
            resolve : (context, args)=>{
                return UserModel.findById(args.id)
            }
        }
    }
})

export const Schema = new GraphQLSchema({ query : Query })
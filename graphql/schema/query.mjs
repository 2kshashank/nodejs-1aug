import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { UserModel } from "../../models/users.mjs";
import { UserType } from "../types/user.mjs";
import { Mutation } from "./mutations.mjs";

const Query = new GraphQLObjectType({
  name: "Root",
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve: () => {
        return UserModel.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (context, args) => {
        return UserModel.findById(args.id);
      },
    },
  },
});

export const Schema = new GraphQLSchema({ 
    query: Query, 
    mutation: Mutation 
});

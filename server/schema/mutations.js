// IMPORTS ==================================================================//
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/user_type");

// SET TYPE =================================================================//
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, request) {
        //TODO resolve
      }
    }
  }
});

// EXPORTS ==================================================================//
module.exports = mutation;

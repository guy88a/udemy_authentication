// IMPORTS ==================================================================//
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// SET TYPE =================================================================//
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

// EXPORTS ==================================================================//
module.exports = UserType;

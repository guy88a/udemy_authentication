// IMPORTS ==================================================================//
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

// SET TYPE =================================================================//
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    email: { type: GraphQLString }
  }
});

// EXPORTS ==================================================================//
module.exports = UserType;

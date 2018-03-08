// IMPORTS ==================================================================//
import gql from "graphql-tag";

// EXPORT ===================================================================//
export default gql`
  mutation {
    logout {
      id
      email
    }
  }
`;

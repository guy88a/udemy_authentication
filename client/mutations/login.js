// IMPORTS ==================================================================//
import gql from "graphql-tag";

// EXPORT ===================================================================//
export default gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

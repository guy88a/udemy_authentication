// IMPORTS ==================================================================//
import gql from "graphql-tag";

// EXPORT ===================================================================//
export default gql`
  mutation SignUp($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

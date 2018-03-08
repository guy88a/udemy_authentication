// IMPORTS ==================================================================//
import React, { Component } from "react";
import { graphql } from "react-apollo";

import userQuery from "../queries/CurrentUser";
import loginMutation from "../mutations/login";
import AuthForm from "./AuthForm";

// DEFINE COMPONENT =========================================================//
class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: userQuery }]
    });
  }

  render() {
    return (
      <div>
        <h4>Login</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

// EXPORT ===================================================================//
export default graphql(loginMutation)(LoginForm);

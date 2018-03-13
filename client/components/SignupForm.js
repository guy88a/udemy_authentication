// IMPORTS ==================================================================//
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import userQuery from "../queries/CurrentUser";
import signupMutation from "../mutations/signup";
import AuthForm from "./AuthForm";
import { queries } from "apollo-client/queries/store";

// DEFINE COMPONENT =========================================================//
class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: userQuery }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h4>Sign Up</h4>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

// EXPORT ===================================================================//
export default graphql(userQuery)(graphql(signupMutation)(SignupForm));

// IMPORTS ==================================================================//
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import userQuery from "../queries/CurrentUser";
import logoutMutation from "../mutations/logout";

// DEFINE COMPONENT =========================================================//
class Header extends Component {
  onLogoutHandler() {
    this.props.mutate({
      refetchQueries: [{ query: userQuery }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutHandler.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">
          <div className="nav-wrapper">{this.renderButtons()}</div>
        </ul>
      </nav>
    );
  }
}

// EXPORT ===================================================================//
export default graphql(logoutMutation)(graphql(userQuery)(Header));

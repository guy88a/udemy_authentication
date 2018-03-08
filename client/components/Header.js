// IMPORTS ==================================================================//
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import userQuery from "../queries/CurrentUser";

// DEFINE COMPONENT =========================================================//
class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>logout</div>;
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
export default graphql(userQuery)(Header);

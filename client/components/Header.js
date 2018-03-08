// IMPORTS ==================================================================//
import React, { Component } from "react";
import { graphql } from "react-apollo";

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
      return <div>login</div>;
    }
  }

  render() {
    return (
      <nav className="">
        <div className="nav-wrapper">{this.renderButtons()}</div>
      </nav>
    );
  }
}

// EXPORT ===================================================================//
export default graphql(userQuery)(Header);

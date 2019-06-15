/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <nav>
        <div className="nav-container">
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

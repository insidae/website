/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  render() {
    const { menuLinks } = this.props;
    const { userLinks } = this.props;

    return (
      <nav>
        <div className="nav-container">
          <div className="menu-links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="user-links">
            {userLinks.map(link => (
              <Link key={link.label} to={link.url} activeClassName="active" className={link.label}>
                <img src={`/icons/fa-${link.label}.svg`} alt={link.label} />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

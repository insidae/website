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
            <a
              href="https://github.com/insidae"
              target="_blank"
              rel="noopener noreferrer"
              className="GitHub"
            >
              <img src="/icons/fa-GitHub.svg" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/insidae"
              target="_blank"
              rel="noopener noreferrer"
              className="LinkedIn"
            >
              <img src="/icons/fa-LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com/lycanstrife"
              target="_blank"
              rel="noopener noreferrer"
              className="Twitter"
            >
              <img src="/icons/fa-Twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";

export default class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer>
        <div className="footer-container">
          <div className="hero">
            <img className="logo" src="/icons/logo.svg" alt="insidae.com logo" />
            <h1 className="logotype">insidae</h1>
          </div>
          <UserLinks config={config} labeled />
          <div className="links">
            <a
              href="https://github.com/insidae"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/insidae"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/lycanstrife"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.insidae.com/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
            <a
              href="https://github.com/insidae/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
            <h4>{copyright}</h4>
            <Link to={url}>
              <button type="submit">Subscribe</button>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
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
          </div>
        </div>
      </footer>
    );
  }
}
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="hero">
            <img className="logo" src="/icons/logo.svg" alt="insidae.com logo" />
            {/* <h1 className="logotype">insidae</h1> */}
          </div>
          <div className="footer-links">
            <a
              href="#___gatsby"
            >
              Back to top
            </a>
            <p>Email: &nbsp;&nbsp;matt@insidae.com</p>
            <p>Minecraft Server: &nbsp;&nbsp;86.9.85.232:25565</p>
            <p>
              Sea of Thieves: &nbsp;&nbsp;
              <a className="footer-link" href="https://discord.gg/sufMQkUXsU">Join our Discord server</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

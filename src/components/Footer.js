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
            <p>Minecraft Server: Currently Offline</p>
{/*             <p>
              Pirate Crew: &nbsp;&nbsp;
              <a className="footer-link" href="https://discord.gg/sufMQkUXsU">Join our Discord server</a>
            </p> */}
            <small>© <script>document.write(new Date().getFullYear())</script> insidae.com. All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    );
  }
}

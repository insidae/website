import React, { Component } from "react";

class Journal extends Component {
  render() {
    return (
      <div className="journal">
        <div className="hero">
          <h1>
            Journal
          </h1>
          <h3>
            Welcome to my Journal
          </h3>
          <p>
            I try and write articles from time to time. Most cover aspects of design or web-development
            but I occasionally tinker with hardware and have even been known to write book reviews. I also 
            like to create the odd guide or two, detailing the things I'm learning or mistakes I've made.
          </p>
        </div>
      </div>
    );
  }
}

export default Journal;

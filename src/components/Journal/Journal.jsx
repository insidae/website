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
            I write articles from time to time. Most cover aspects of design or web-development,
            but I occasionally tinker with hardware or review things I like. I also create 
            guides, detailing the things I'm learning and the mistakes I'm making along the way.
          </p>
        </div>
      </div>
    );
  }
}

export default Journal;

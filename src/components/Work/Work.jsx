import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="hero">
          <h1>
            Work
          </h1>
          <p>
            A more comprehensive portfolio of my work is available on request. If you are actually looking for work (as in, something to do), why not try your hand at making some paperclips.
          </p>
          
          <div className="paperclips-iframe">
                <iframe title="paperclips" src="/paperclips/" style={{ width: "100%", height: "100%", border: "none" }} />
            </div>
        </div>
      </div>
    );
  }
}

export default Work;

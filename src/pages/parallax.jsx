import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Parallax from "../components/Parallax/Parallax";
import config from "../../data/SiteConfig";

class ParallaxPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <Parallax />
        </div>
      </Layout>
    );
  }
}

export default ParallaxPage;

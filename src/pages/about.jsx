import React, { Component } from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;

export const Head = () => (
  <SEO pageTitle={`About | ${config.siteTitle}`} />
);

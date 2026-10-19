import React, { Component } from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Work from "../components/Work/Work";
import config from "../../data/SiteConfig";

class WorkPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Work />
        </div>
      </Layout>
    );
  }
}

export default WorkPage;

export const Head = () => (
  <SEO pageTitle={`Work | ${config.siteTitle}`} />
);

import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Work from "../components/Work/Work";
import config from "../../data/SiteConfig";

class WorkPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Work | ${config.siteTitle}`} />
          <Work />
        </div>
      </Layout>
    );
  }
}

export default WorkPage;

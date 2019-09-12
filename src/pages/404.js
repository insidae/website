import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Error from "../components/Error/Error";
import config from "../../data/SiteConfig";

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Error | ${config.siteTitle}`} />
          <Error />
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;

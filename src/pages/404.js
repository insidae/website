import React, { Component } from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Error from "../components/Error/Error";
import config from "../../data/SiteConfig";

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Error />
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;

export const Head = () => (
  <SEO pageTitle={`Error | ${config.siteTitle}`} />
);

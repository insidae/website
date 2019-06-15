import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <h1>insidae</h1>
          <p>[in-sid-day]</p>
          <h3>adjective</h3>
          <ol>
            <li>skilful; ingenious</li>
            <li>cleverly-wrought</li>
            <li>buying a domain is much easier if you make up your own word</li>
          </ol>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

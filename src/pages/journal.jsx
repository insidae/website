import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import PostListing from "../components/PostListing/PostListing";
import Journal from "../components/Journal/Journal";
import config from "../../data/SiteConfig";

class JournalPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const {tags} = this.props.data;

    return (
      <Layout>
        <div className="container">
          <Helmet title={`Journal | ${config.siteTitle}`} />
          <Journal />
          <div className="panel tags">
            <PostTags tags={tags} />
          </div>
          <div className="panel padded green journal-posts">
            <h2>Latest Articles</h2>
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default JournalPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query JournalQuery {
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

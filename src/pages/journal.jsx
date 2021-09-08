import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Journal from "../components/Journal/Journal";
import config from "../../data/SiteConfig";

class JournalPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const categories = this.props.data.categories.group;

    return (
      <Layout>
        <div className="container">
          <Helmet title={`Journal | ${config.siteTitle}`} />
          <Journal />
          <div className="panel tags red">
            <h2>Browse by Tag</h2>
            {categories.map(category => (
                <Link
                  to={`/tags/${category.fieldValue.toLowerCase()}`}
                  className="tag-filter"
                  key={category.fieldValue}
                >
                  {`${category.fieldValue}`}
                </Link>
              ))}
            <h2 className="tag-heading">
              <span>01</span>
            </h2>
          </div>
          <div className="panel green journal-posts">
            <h2 className="heading">
              Latest Articles
              <span>02</span>
            </h2>
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
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 130)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "dddd DD MMMM YYYY")
          }
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

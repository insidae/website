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
            {categories.map(category => {
              return (
                <Link
                  to={`/tags/${category.fieldValue.toLowerCase()}`}
                  className="tag-filter"
                  key={category.fieldValue}
                >
                  {`${category.fieldValue}`}
                </Link>
              )
            })}
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
      limit: 100
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

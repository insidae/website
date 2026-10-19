import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="container">
          <div id="main-content" className="tag-container">

            <div className="hero">
              <h1>{`Tagged as ${tag}`}</h1>
            </div>

            <div className={`panel grey ${tag}`}>
              <h2 className="heading">
                Latest Articles
                <span>01</span>
              </h2>
              <PostListing postEdges={postEdges} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export const Head = ({ pageContext }) => (
  <SEO pageTitle={`Posts tagged as "${pageContext.tag}" | ${config.siteTitle}`} />
);

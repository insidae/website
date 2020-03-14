/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const { data } = this.props;

    const postEdges = data.allMarkdownRemark.edges;
    const readingPostEdges = data.reading.edges;

    return (
      <Layout>
        <div className="container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="hero">
            <img className="logo" src="/icons/logo.svg" alt="insidae.com logo" />
            <h1 className="logotype">insidae</h1>
            <p>
              [in-<b>sid</b>-day]
            </p>
            <h3>adjective</h3>
            <ol>
              <li>skilful; ingenious</li>
              <li>cleverly-wrought</li>
              <li>buying a domain is much easier if you make up your own word</li>
            </ol>
          </div>
          <div className="columns two">
            <div className="panel">
              <h2>
                My name's Matt Thomas
              </h2>
              <p>
                I'm a web-developer and am currently based in London, UK. Well-versed
                in design and front-end web development, I built this website to keep
                track of my progress and showcase my interests.
              </p>
            </div>
            <div className="panel">
              <h2>
                I am currently...
              </h2>
              <p>
                Employed full-time as a UI Designer / Front-end Developer. I'm also working on side projects 
                (such as <a href="https://github.com/insidae/Status-Board" target="blank"><b>HomeScreen</b></a>
                ), rebuilding this website in Gatsby, and sitting down to write whenever I can.
              </p>
            </div>
          </div>
          <div className="columns three">
            <div className="panel">
              <h2>Latest Articles</h2>
              <PostListing postEdges={postEdges} />
              <Link class="more" to="/journal">See more...</Link>
            </div>
            <div className="panel">
              <h2>Recent Work</h2>
              <img className="work" src="images/favicon_asset.png" alt="A3 Agency Software Branding" />
              <img className="work" src="images/StatusBoard_Progress_02.png" alt="UI Design for HomeScreen" />
            </div>
            <div className="panel">
              <h2>Reading...</h2>
              <PostListing postEdges={readingPostEdges} />
              <Link class="more" to="/journal">See more...</Link>
            </div>
          </div>
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
      limit: 2
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Main" } } }
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
    reading: allMarkdownRemark(
      limit: 2
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Reading" } } }
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

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
    const writingPostEdges = data.writing.edges;

    return (
      <Layout>
        <div className="container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="hero">
            <div className="definition">
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
            <div className="digital-monster">
              <img className="placeholder" src="/images/digipet.gif" alt="FEED ME!" />
            </div>
          </div>
          <div className="columns two">
            <div className="panel red">
              <h2 className="heading">
                My name's Matt Thomas
                <span>01</span>
              </h2>
              <p className="copy">
                I'm a web-developer and am currently based in London, UK. Well-versed
                in design and front-end web development, I built this website to keep
                track of my progress and showcase my interests.
              </p>
            </div>
            <div className="panel blue">
              <h2 className="heading">
                I am currently...
                <span>02</span>
              </h2>
              <p className="copy">
                Employed full-time as a UI Designer / Front-end Developer. I'm also working on side projects 
                (such as <a href="https://github.com/insidae/Status-Board" target="blank"><b>HomeScreen</b></a>
                ), rebuilding this website in Gatsby, and sitting down to write whenever I can.
              </p>
            </div>
          </div>
          <div className="columns three">
            <div className="panel large green">
              <h2 className="heading">
                Latest Articles
                <span>03</span>
              </h2>
              <PostListing postEdges={postEdges} />
              <Link className="more" to="/journal">See more...</Link>
            </div>
            <div className="panel writing">
              <h2 className="heading">
                Writing...
                <span>04</span>
              </h2>
              <img className="book-cover" src="/images/Monochrome-Cover-Refresh-03.png" alt="Book Cover" />
              <PostListing postEdges={writingPostEdges} />
              <Link className="more" to="/journal">See more...</Link>
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
      limit: 3
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Main" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 150)
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
    writing: allMarkdownRemark(
      limit: 1
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Writing" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 70)
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

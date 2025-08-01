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
            <div className="parallax-iframe window">
                <iframe title="parallax" src="/webVR/" style={{ width: "100%", height: "100%", border: "none" }} />
            </div>
            <Link className="" to="/digital-pet">
              <div className="digital-monster">
                {/* <img className="placeholder" src="/images/dead-digipet.gif" alt="FEED ME!" /> */}
                <img className="placeholder" src="/images/updated-digipet-details.gif" alt="FEED ME!" />
              </div>
            </Link>
          </div>
          <div className="columns two">
            <div className="panel red">
              <h2 className="heading">
                My name's Matt Thomas
                <span>01</span>
              </h2>
              <p className="copy">
                I'm a web developer / UI designer, based in London. Well-versed
                in design and front-end development, I built this site to keep
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
                (such as <a href="https://daemonvr.com" target="blank"><b>dæmonVR</b></a>
                ), and sitting down to write whenever I can.
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
            <div className="panel books">
              <h2 className="heading">
                Writing...
                <span>04</span>
              </h2>
              <img className="book-cover" src="/images/Monochrome-Cover-Refresh-05.png" alt="Book Cover" />
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Main" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 185)
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
    writing: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Writing" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 110)
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
  }
`;

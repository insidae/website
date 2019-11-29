/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
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
                I'm a web-developer, currently based in London, 
                UK. Well-versed in design and front-end web 
                development, I built this website to keep track of 
                my progress and showcase my interests.
              </p>
            </div>
            <div className="panel">
              <h2>
                I am currently...
              </h2>
              <p>
                Employed full-time as a UI Designer / Front-end 
                Developer. I'm also working on side projects, such 
                as <a href="https://github.com/insidae/Status-Board" target="blank"><b>HomeScreen</b></a>, rebuilding this website with 
                Gatsby, and writing whenever I get the chance.
              </p>
            </div>
          </div>
          <div className="columns three">
            <div className="panel">
              <h2>Latest Articles</h2>
              <PostListing postEdges={postEdges} />
            </div>
            <div className="panel">
              <h2>Latest Work</h2>
              <p>Thumbnail</p>
            </div>
            <div className="panel">
              <h2>Reading...</h2>
              <p>Thumbnail</p>
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

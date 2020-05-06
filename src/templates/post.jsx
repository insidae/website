import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug, nextslug, prevslug, nexttitle, prevtitle } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div id="main-content">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="post container">
            <div className="panel">
              <h1 className="title">{post.title}</h1>
              <h3 className="date">{post.date}</h3>
              <PostTags tags={post.tags} />
              <div className="post-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <Link to={nextslug} className="prev-post">
                <strong>Previous Article</strong>
                <br />
                {nexttitle}
              </Link>
              <Link to={prevslug} className="next-post">
                <strong>Next Article</strong>
                <br />
                {prevtitle}
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;

import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;

    return (
      <div className="social-links">
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon rect size={iconSize} />
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon rect size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon rect size={iconSize} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon rect size={iconSize} />
        </LinkedinShareButton>
        <h2>Share this article</h2>
      </div>
    );
  }
}

export default SocialLinks;

import React from "react";
import { Link } from "gatsby";
import { formatDate } from "../../utils/global";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <div className="post-listing">
        <div className="posts">
          {/* Your post list here. */
            postList.map(post => {
              const date = formatDate(post.date)

              return (
                <Link to={post.path} key={post.title} className="post">
                  <h3 className="title">{post.title}</h3>
                  <h3 className="date">{date}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              )
            })}
        </div>
      </div>
    );
  }
}

export default PostListing;

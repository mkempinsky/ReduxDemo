import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditPost from "./EditPost";

class AllPosts extends React.Component {
  render() {
    const posts = this.props.posts;
    return (
      <div className="AllPosts">
        <h3>Posts:</h3>
        {posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <EditPost post={post} key={post.id} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPosts);

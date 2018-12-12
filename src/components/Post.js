import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

class Post extends React.Component {
  render() {
    const post = this.props.post;
    const date = format(new Date(post.id), "MMMM D, YYYY");
    return (
      <div className="Post">
        <h3>{post.title}</h3>
        <div className="post-content">
          <p>{post.post}</p>
        </div>
        <p className="date" dangerouslySetInnerHTML={{ __html: date }} />
        <button
          className="edit"
          onClick={() =>
            this.props.dispatch({ type: "EDIT_POST", id: post.id })
          }
        >
          edit
        </button>
        <button
          className="delete"
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: post.id })
          }
        >
          delete
        </button>
      </div>
    );
  }
}
export default connect()(Post);

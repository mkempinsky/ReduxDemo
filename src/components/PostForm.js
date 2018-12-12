import React from "react";
import { connect } from "react-redux";

class PostForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const post = this.getPost.value;
    const data = {
      id: new Date(),
      title,
      post,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getPost.value = "";
  };
  render() {
    return (
      <div className="PostForm">
        <div className="PostFormFixed">
          <h3>Create New Post</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              placeholder="Post Title"
              ref={input => (this.getTitle = input)}
            />
            <textarea
              required
              placeholder="Post Content"
              ref={input => (this.getPost = input)}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(PostForm);

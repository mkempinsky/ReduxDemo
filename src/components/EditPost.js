import React from "react";
import { connect } from "react-redux";

class EditPost extends React.Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newPost = this.getPost.value;
    const data = {
      newTitle,
      newPost
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Post Title"
          />
          <textarea
            required
            ref={input => (this.getPost = input)}
            defaultValue={this.props.post.post}
            placeholder="Enter Post"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditPost);

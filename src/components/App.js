import React from "react";
import PostForm from "./PostForm";
import AllPosts from "./AllPosts";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img
          style={{ maxWidth: "100px" }}
          src="https://pbs.twimg.com/media/Cg_NJDQWIAAiaK2.jpg"
        />
        <h2>Redux Demo</h2>
        <div className="container">
          <PostForm />
          <AllPosts />
        </div>
      </div>
    );
  }
}
export default App;

import React from "react";

export class PostPage extends React.Component {
  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    body: this.props.post.body
  };

  render() {
    return (
      <>
        <button onClick={() => this.props.onCancel()}>Back to List</button>

        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </>
    );
  }
}

import React from "react";
import { PostPage } from "./PostPage";

const User = props => (
  <>
    {props.users.map(item =>
      item.id === props.id ? (
        <div key={item.id}>
          <h4>
            <b>Author: </b>
            {item.name}
          </h4>
          -------------
        </div>
      ) : (
        ""
      )
    )}
  </>
);

// const PostsWithUsers = ({posts, users}) => (
//     <ul>
//         {posts.map(item => (
//             <li key={item.id}>
//                 <b>Post title:</b>
//                 <h3>{item.title}</h3>
//                 <User id={item.id} users={users} />
//             </li>
//         ))}
//     </ul>
// );

export class PostsWithUsers extends React.Component {
  state = {
    users: this.props.users,
    posts: this.props.posts,
    activePost: null
  };

  changeActive = postId => {
    this.setState({
      activePost: postId
    });
  };

  render() {
    if (this.state.activePost) {
      return (
        <PostPage
          post={this.state.posts.find(
            post => post.id === this.state.activePost
          )}
          onCancel={() =>
            this.setState({
              activePost: null
            })
          }
        />
      );
    }

    return (
      <ul>
        {this.state.posts.map(item => (
          <li
            key={item.id}
            onClick={() => this.changeActive(item.id)}
          >
            <b>Post title:</b>
            <h3>{item.title}</h3>
            <User id={item.userId} users={this.state.users} />
          </li>
        ))}
      </ul>
    );
  }
}

export class PostsList extends React.Component {
  state = {
    users: null,
    posts: null
  };

  async componentDidMount() {
    const responsePosts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await responsePosts.json();
    const responseUsers = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await responseUsers.json();

    this.setState({
      posts,
      users
    });
  }

  render() {
    if (!this.state.posts && !this.state.users) {
      return <h1>...Loading</h1>;
    }

    return <PostsWithUsers posts={this.state.posts} users={this.state.users} />;
  }
}

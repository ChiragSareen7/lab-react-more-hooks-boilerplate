import React, { Component } from 'react';

class More extends Component {
  render() {
    const { post, dispatch } = this.props;

    return (
      <div >
        <span>{post.toggle ? post.name : "hidden "}</span>
        <button onClick={() => dispatch({ type: "Toggle", payload: { id: post.id } })}>Toggle</button>
      </div>
    );
  }
}

export default More;

import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage, match: { params: { id } } } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component, user id: { id } </p>
      </div>
    );
  }
};

export default Users;
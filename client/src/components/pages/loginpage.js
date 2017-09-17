import React, { Component } from 'react';
import LoginForm from '../forms/loginform';

class LoginPage extends Component {
  submit = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;

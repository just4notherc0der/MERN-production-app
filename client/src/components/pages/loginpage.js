import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/loginform';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  submit = (data) => {
    return this.props.login(data)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

// expect history object with push method and login func
LoginPage.PropTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);

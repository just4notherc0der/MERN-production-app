import React, { Component } from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/inlineerror';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {}
  };

  onChange = (e) => this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
        .catch((err) => {
          this.setState({ errors: err.response.data.errors })
        });
    }
  };

  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) {
      errors.email = "Email is not valid";
    }
    if(!data.password) {
      errors.password = 'Password field can\'t be empty';
    }
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        {errors.global && (
          <div>
            Something went wrong
            <p>{errors.global}</p>
          </div>
        )}
        <input
          type="email" id="email"
          name="email" placeholder="Email"
          value={data.email}
          onChange={this.onChange} />
        {errors.email && <InlineError text={errors.email} />}
        <input
          type="password" id="password"
          name="password" placeholder="Password"
          value={data.password}
          onChange={this.onChange} />
        {errors.password && <InlineError text={errors.password} />}
        <button type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;

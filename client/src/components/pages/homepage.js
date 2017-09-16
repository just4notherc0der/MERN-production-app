import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

export class AddBlogPage extends React.Component {

  render() {
    return (
      <div>
        <Link to='/'>Dashboard</Link>
        <p>This is where you will add a blog </p>
      </div>
    )
  }
}

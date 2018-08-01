import React from 'react';
import { Link } from 'react-router-dom';

export class DashboardPage extends React.Component {
    handleLoad = (e) => {
      e.preventDefault();
    }

    render() {
      return(
        <div>
          <Link to='/'>Dashboard</Link>
          <Link to='/add'>Add Blog</Link>
          <p>This is the DashboardPage</p>
        </div>
      );
    };
};

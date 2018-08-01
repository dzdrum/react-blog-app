import React from 'react';
import { BrowserRouter as Router, Route, Line, Switch } from 'react-router-dom';
import { DashboardPage } from '../components/DashboardPage';
import { AddBlogPage } from '../components/AddBlogPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={DashboardPage}/>
      <Route path='/add' component={AddBlogPage}/>
    </Switch>
  </Router>
)

export default AppRouter;

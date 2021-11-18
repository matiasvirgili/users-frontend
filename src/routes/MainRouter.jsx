import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { UserScreen } from '../components/users/UserScreen';
import { Layout } from '../components/header/Layout';

export const MainRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home">
            <HomeScreen />
          </Route>
          <Route exact path="/users">
            <UserScreen />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </Router>
  );
};

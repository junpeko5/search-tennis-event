import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Appbar from './components/Appbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AppFooter from './components/AppFooter';

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Appbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
          </Switch>
        </main>
        <AppFooter />
      </Router>
    </>
  );
};

export default App;

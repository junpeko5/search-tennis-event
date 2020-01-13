import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Appbar from './components/Appbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AppFooter from './components/AppFooter';
import Paperbase from './components/admin/Paperbase';

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
            <Route path="/sign-in" exact>
              <SignIn />
            </Route>
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
            <Route path="/admin" exact>
              <Paperbase />
            </Route>
          </Switch>
        </main>
        <AppFooter />
      </Router>
    </>
  );
};

export default App;

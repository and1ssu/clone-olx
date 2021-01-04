import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import AdPage from './pages/AdPage';

import NotFound from './pages/NotFound';
export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/signin">
                <SingIn />
            </Route>

            <Route exact path="/signup">
                <SingUp />
            </Route>

            <Route exact path="/ad/:id">
                <AdPage />
            </Route>

            <Route>
                <NotFound />
            </Route>


        </Switch>

    );
}
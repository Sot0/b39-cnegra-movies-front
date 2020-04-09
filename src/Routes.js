import React, { Fragment } from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import NavBar from './common/NavBar';


const Routes = () => {
    return (
        <Fragment>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about'>
                    <Redirect to='/'/>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default Routes;
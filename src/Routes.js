import React from 'react';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';

const Logout = () => {
    sessionStorage.removeItem('notNameToken');
    return <Redirect to="login"/>
}

const Me = () => {
    return null
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login}/>
                {/* <Route exact path='/favorites' component={Home}/> */}
                <Route exact path='/me' component={Me}/>
                <Route exact path='/logout' component={Logout}/>
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

/* <Route exact path='/' component={authHOC(Home)} /> */
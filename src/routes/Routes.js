import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../components/Login';
import { Home } from '../home/Home';
import { MyBooking } from '../home/MyBooking';
import { SuccessMessage } from '../components/SuccessMessage/successMessage.js';

import {
    LOGIN_URL,
    CLIENT_HOME_URL,
    CLIENT_MY_BOOKING_URL,
    SUCCESS_URL
} from './URLMap';

export const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                {/* <Route exact path={LOGIN_URL} component={Login}/> */}
                <Route exact path={SUCCESS_URL} component={SuccessMessage}/>
                <Route exact path={CLIENT_HOME_URL} component={Home}/>
                <Route exact path={CLIENT_MY_BOOKING_URL} component={MyBooking}/>
            </Switch>
        </React.Fragment>
    );
};
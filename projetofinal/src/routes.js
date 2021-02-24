import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home';
import RegisterUser from './views/register-user';
import ListUser from './views/list-user';
import DetailUser from './views/detail-user';

import RegisterSchedule from './views/register-schedule';
import ListSchedule from './views/list-schedule';
import DetailSchedule from './views/detail-schedule';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/register-user" component={RegisterUser} />
    <Route path="/list-user" component={ListUser} />
    <Route path="/detail-user/:id" component={DetailUser} />

    <Route path="/register-schedule" component={RegisterSchedule} />
    <Route path="/list-schedule" component={ListSchedule} />
    <Route path="/detail-schedule/:id" component={DetailSchedule} />
  </Switch>
);

export default Routes;

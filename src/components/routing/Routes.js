
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/Home';
import NotFound from '../layout/NotFound';
import RegisterUser from "../register_user/RegisterUser";
import LoginUser from "../login_user/LoginUser";
import Orders from "../orders/Orders";
import Order from "../order/Order";
import NewOrder from "../order_new/NewOrder";
import User from '../user/User';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <section className="bg-light p-5">
        <div className="container">
          <h1 className="display-5 text-center py-5">Sample App</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register_user" component={RegisterUser} />
            <Route exact path="/login_user" component={LoginUser} />
            <Route 
              path="/orders" 
              element={<PrivateRoute component={Orders} />}
            />
            <Route
              path="/orders/:id" 
              element={<PrivateRoute component={Order} />}
            />
            <Route
              path="/order/new" 
              element={<PrivateRoute component={NewOrder} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </section>
    </Fragment>
  );
};

export default Routes;
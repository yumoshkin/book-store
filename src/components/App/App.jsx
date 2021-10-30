import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopHeader from '../ShopHeader';
import { HomePage, CartPage } from '../pages';

const App = ({ totalCount, totalPrice }) => (
  <main role="main" className="container">
    <ShopHeader totalCount={totalCount} totalPrice={totalPrice} />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </main>
);

const mapStateToProps = ({ cart: { totalCount, totalPrice } }) => ({
  totalCount,
  totalPrice,
});

export default connect(mapStateToProps)(App);

import React from 'react';
import { Link } from 'react-router-dom';

import { getFormatedValue } from '../../utils';
import './ShopHeader.css';

const ShopHeader = ({ totalCount, totalPrice }) => (
  <header className="shop-header row">
    <Link to="/">
      <div className="logo text-dark">BookStore</div>
    </Link>
    <Link to="/cart">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {totalCount} items (${getFormatedValue(totalPrice, 'currency')})
      </div>
    </Link>
  </header>
);

export default ShopHeader;

import React from 'react';
import { connect } from 'react-redux';

import { addCartItem, removeCartItem, removeBookCartItems } from '../../redux/actions';
import { getFormatedValue } from '../../utils';
import './Cart.css';

const Cart = ({
  cartItems,
  totalPrice,
  onAddCartItem,
  onRemoveCartItem,
  onRemoveBookCartItems,
}) => {
  const renderRow = (item, idx) => {
    const {
      id,
      title,
      price,
      count,
    } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${getFormatedValue(price * count, 'currency')}</td>
        <td>
          <button
            onClick={() => onRemoveBookCartItems(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onAddCartItem(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onRemoveCartItem(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2 className="header">Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{cartItems.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${getFormatedValue(totalPrice, 'currency')}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems, totalPrice } }) => ({
  cartItems,
  totalPrice,
});

const mapDispatchToProps = {
  onAddCartItem: addCartItem,
  onRemoveCartItem: removeCartItem,
  onRemoveBookCartItems: removeBookCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

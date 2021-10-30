const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, item) => sum + item.price * item.count, 0);
const getTotalCount = (arr) => arr.reduce((sum, item) => sum + item.count, 0);

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }

  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const geCartItems = (cartItems, newItem, itemIndex) => {
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

  return {
    cartItems: newCartItems,
    totalPrice: getTotalPrice(newCartItems),
    totalCount: getTotalCount(newCartItems),
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK_TO_CART': {
      const { cartItems } = state;
      const { id, title, price } = action.payload;

      const itemIndex = cartItems.findIndex((item) => item.id === id);

      let newItem = {};
      if (itemIndex === -1) {
        newItem = {
          id,
          title,
          price,
          count: 1,
        };
      } else {
        const item = cartItems[itemIndex];
        newItem = {
          ...item,
          count: item.count + 1,
        };
      }

      return geCartItems(cartItems, newItem, itemIndex);
    }
    case 'ADD_CART_ITEM': {
      const { cartItems } = state;

      const itemIndex = cartItems.findIndex((item) => item.id === action.payload);
      const item = cartItems[itemIndex];

      const newItem = {
        ...item,
        count: item.count + 1,
        total: (item.count + 1) * item.price,
      };

      return geCartItems(cartItems, newItem, itemIndex);
    }
    case 'REMOVE_CART_ITEM': {
      const { cartItems } = state;

      const itemIndex = cartItems.findIndex((item) => item.id === action.payload);
      const item = cartItems[itemIndex];

      const newItem = {
        ...item,
        count: item.count - 1,
      };

      return geCartItems(cartItems, newItem, itemIndex);
    }
    case 'REMOVE_BOOK_CART_ITEMS': {
      const { cartItems } = state;

      const itemIndex = cartItems.findIndex((item) => item.id === action.payload);
      const item = cartItems[itemIndex];

      const newItem = {
        ...item,
        count: 0,
      };

      return geCartItems(cartItems, newItem, itemIndex);
    }
    default:
      return state;
  }
};

export default cartReducer;

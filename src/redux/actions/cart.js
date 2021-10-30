const addBookToCart = (book) => ({
  type: 'ADD_BOOK_TO_CART',
  payload: book,
});

const addCartItem = (bookId) => ({
  type: 'ADD_CART_ITEM',
  payload: bookId,
});

const removeCartItem = (bookId) => ({
  type: 'REMOVE_CART_ITEM',
  payload: bookId,
});

const removeBookCartItems = (bookId) => ({
  type: 'REMOVE_BOOK_CART_ITEMS',
  payload: bookId,
});

export {
  addBookToCart,
  addCartItem,
  removeCartItem,
  removeBookCartItems,
};

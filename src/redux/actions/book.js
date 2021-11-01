const booksRequest = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksLoad = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequest());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoad(data)))
    .catch((err) => {
      dispatch(booksError(err));
    });
};

export default fetchBooks;

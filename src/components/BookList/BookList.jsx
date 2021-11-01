import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../BookListItem/BookListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import withBookstoreService from '../hoc';
import { fetchBooks, addBookToCart } from '../../redux/actions';
import compose from '../../utils/compose';
import './BookList.css';

const BookList = ({ books, onAddBookToCart }) => (
  <ul className="book-list">
    {books.map((book) => (
      <li key={book.id}>
        <BookListItem book={book} onAddBookToCart={() => onAddBookToCart(book)} />
      </li>
    ))}
  </ul>
);

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      books,
      isLoading,
      error,
      onAddBookToCart,
    } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddBookToCart={onAddBookToCart} />;
  }
}

const mapStateToProps = ({ book: { books, isLoading, error } }) => ({
  books,
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddBookToCart: addBookToCart,
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);

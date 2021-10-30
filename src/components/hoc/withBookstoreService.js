import React from 'react';

import { BookstoreServiceConsumer } from '../BookStoreServiceContext';

// eslint-disable-next-line react/display-name
const withBookstoreService = () => (Wrapped) => (props) => (
  <BookstoreServiceConsumer>
    {(bookstoreService) => <Wrapped {...props} bookstoreService={bookstoreService} />}
  </BookstoreServiceConsumer>
);

export default withBookstoreService;

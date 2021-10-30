const bookstoreService = {
  data: [
    {
      id: 1,
      title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
      author: 'Robin Wieruch',
      price: 29.99,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX384_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Professional JavaScript for Web Developers',
      author: 'Matt Frisbie',
      price: 30.49,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51uEdt4fxnL._SX404_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Code Complete: A Practical Handbook of Software Construction, Second Edition',
      author: 'Steve McConnell',
      price: 25.41,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51FUYfErOXL._SX408_BO1,204,203,200_.jpg',
    },
  ],

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
        // imitation of errors
        // if (Math.random() > 0.75) {
        //   reject(new Error('Something bad happened'));
        // } else {
        //   resolve(this.data);
        // }
      }, 500);
    });
  },
};

export default bookstoreService;

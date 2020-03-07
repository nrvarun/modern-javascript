class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
    this.BOOK_API = "https://some.url/api";
  }

  // TODO: define methods `addFavoriteBook(..)`
  // and `printFavoriteBooks()`

  loadBooks(bookshelf) {
    // TODO: call fakeAjax( .. );
    fakeAjax(this.BOOK_API, bookNames => {
      bookNames.map((book, index) => {
        bookshelf.addFavoriteBook(book);
      });
      bookshelf.printFavoriteBooks();
    });
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    const bookShelfList = document.querySelector(".js-bookshelf");

    for (let bookName of this.favoriteBooks) {
      const book = document.createElement("li");
      book.innerHTML = bookName;
      bookShelfList.append(book);
    }
  }
}

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS"
    ]);
  }, 500);
}

export default Bookshelf;

// Working with an API, parsing the info and adding it to the DOM using fetch and promises.

const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const addBookToDom = (item) => {
  let element = document.createElement('div');
  let title = document.createElement('h3');
  let author = document.createElement('p');
  let released = document.createElement('p');
  let pages = document.createElement('p');

  title.textContent = item.name;
  author.textContent = item.authors[0];
  released.textContent = new Date(item.released).getFullYear().toString();
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  app.append(element);
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, 
  // and number of pages. Update the styles in JavaScript to center all the books in the 
  // container given.

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((book) => {
      // console.log(book.name, book.authors[0], book.isbn, book.numberOfPages, book.released);
      addBookToDom(book);
    })
  })
  .catch((error) => {
    console.error(error);

    let element = document.createElement('div');
    element.textContent = "Something Happened.. -_-";
    app.append(element);

  })
  .finally(() => {
    // Removes an element from the DOM! In this case the loader wheel. 
    // Used in finally clause since it should happen in either case...
    let loader = document.querySelector('#loading');
    app.removeChild(loader);
  })
};

fetchData(url);
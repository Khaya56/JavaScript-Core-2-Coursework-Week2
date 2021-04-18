function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");

  let unorderedList = document.createElement('ul');

  books.forEach(book => {
    let bookTitleAuthor = document.createElement('p');
    bookTitleAuthor.innerText = `${book.title} is written by ${book.author}`;



    unorderedList.appendChild(bookTitleAuthor);
    content.appendChild(unorderedList);


  
});
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);
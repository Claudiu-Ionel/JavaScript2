'use strict';

{
  // const bookTitles = [
  //   'harry_potter_chamber_secrets',
  //   '1984',
  //   'before_i_die',
  //   'abduction',
  //   'divina_comedia',
  //   'a_friendly_sloth',
  //   'the_pope_and_a_bottle_of_wine',
  //   'midnight_stories',
  //   'unsung_war_songs',
  //   'the_overthinking_lobster',
  // ];

  // Replace with your own code
  const myBooks = {
    harry_potter_chamber_secrets: {
      title: 'Harry Potter and the Chambers of Secrets',
      language: 'english',
      author: 'J.K. Rowling',
    },
    '1984': {
      title: '1984',
      language: 'english',
      author: 'George Orwell',
    },
    before_i_die: {
      title: 'Before I Die',
      language: 'english',
      author: 'Jenny Downham',
    },
    abduction: {
      title: 'Abduction',
      language: 'english',
      author: 'Alex Markus',
    },
    divina_comedia: {
      title: 'Divina Comedia',
      language: 'english',
      author: 'Dante Aligheri',
    },
    a_friendly_koala: {
      title: 'A friendly Koala',
      language: 'english',
      author: 'Lazy Slothness',
    },
    the_pope_and_a_bottle_of_wine: {
      title: 'The pope and a bottle of wine',
      language: 'english',
      author: 'Pope Francis',
    },
    midnight_stories: {
      title: 'Midnight Stories',
      language: 'english',
      author: 'James Arthur',
    },
    unsung_war_songs: {
      title: 'Unsung War Songs',
      language: 'english',
      author: 'Ginger Axe',
    },
    the_overthingking_lobster: {
      title: 'The Overthinking Lobster',
      language: 'english',
      author: 'Basic Cheff',
    },
  };
  const bookImages = {
    harry_potter_chamber_secrets: './img/chamber_of_secrets_cover.jpg',
    '1984': './img/1984_cover.jpg',
    before_i_die: './img/before_i_die_cover.jpg',
    abduction: './img/abduction_cover.jpg',
    divina_comedia: './img/divina_comedia_cover.jpg',
    a_friendly_koala: './img/friendly_koala_cover.jpg',
    the_pope_and_a_bottle_of_wine: './img/pope_wine_cover.jpg',
    midnight_stories: './img/midnight_stories_cover.jpg',
    unsung_war_songs: './img/unsung_war_songs_cover.jpg',
    the_overthingking_lobster: './img/overthinking_lobster_cover.jpg',
  };
  console.log(bookImages);
  const getBody = document.querySelector('body');
  const createShelf = document.createElement('div');
  createShelf.setAttribute('class', 'shelf');
  getBody.appendChild(createShelf);

  function makeBooks() {
    for (const el in myBooks) {
      if (el !== {}) {
        const book = document.createElement('div');
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('div');
        const bookLanguage = document.createElement('div');
        book.setAttribute('class', 'book-item');
        book.setAttribute('id', el);
        bookTitle.setAttribute('class', 'book-item_title');
        bookAuthor.setAttribute('class', 'book-item_author');
        bookLanguage.setAttribute('class', 'book-item_language');
        bookTitle.innerHTML = myBooks[el].title;
        bookAuthor.innerHTML = `by ${myBooks[el].author}`;
        bookLanguage.innerHTML = `in ${myBooks[el].language}`;
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookLanguage);
        createShelf.appendChild(book);
      }
    }
  }
  makeBooks();

  const getNrBooks = document.querySelector('.shelf').childElementCount;
  const getBooks = document.querySelectorAll('.book-item');
  console.log(getBooks);
  const arrayImageIds = Object.keys(bookImages);
  const arrayImageUrl = Object.values(bookImages);
  console.log(arrayImageUrl);
  console.log(arrayImageIds);
  function addBookImage() {
    for (let i = 0; i < getNrBooks; i++) {
      if (getBooks[i].id === arrayImageIds[i]) {
        getBooks[i].style.backgroundImage = `url(${arrayImageUrl[i]}) `;
      } else {
        return;
      }
    }
  }
  addBookImage();
}

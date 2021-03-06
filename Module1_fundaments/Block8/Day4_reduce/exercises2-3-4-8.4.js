const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercise 2
const allAuthors = books.reduce(((acc, item, i, array) => {
  if (i === array.length - 1) {
    return `${acc} ${item.author.name}.`
  } else {
    return `${acc} ${item.author.name},`
  }
}), '');

console.log(allAuthors);

//Exercise 3
const averageAge = books.map(
  (item) => item.releaseYear - item.author.birthYear
).reduce((acc, item, i, array) => {
  const numberOfItems = array.length;
  if (i === array.length - 1) {
    return (acc + item) / numberOfItems;
  } else {
    return acc + item;
  }
});

console.log(averageAge);

//Exercise 4

const longestBookName = books.reduce((acc, item) => (acc.name.length > item.name.length) ? acc : item);

console.log(longestBookName);
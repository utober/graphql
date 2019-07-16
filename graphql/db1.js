export let movies = [
  {
    id: "0",
    name: "Cafe24",
    score: 1
  },
  {
    id: "1",
    name: "Gabia",
    score: 8
  },
  {
    id: "2",
    name: "Star wars - The new one",
    score: 30
  },
  {
    id: "3",
    name: "Avengers - The new one",
    score: 40
  },
  {
    id: "4",
    name: "The Godfather",
    score: 30
  },
  {
    id: "5",
    name: "Logan",
    score: 50
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = movies.filter(movie => movie.id === id);
  return filterMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
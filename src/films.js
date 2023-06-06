// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => {
    return movie.director
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  let result = array.filter(element => element.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = array.filter(element => element.director === director);
  const total = result.reduce((accumulator, movie) => accumulator + movie.score, 0);
  const average = parseFloat((total / result.length).toFixed(2));

  console.log('Exercise 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const MoviesCopy = [...array]; //operador de propagación(no modifica array original)
  console.log("EXERCICE 4 ->", MoviesCopy);
  return MoviesCopy
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const MoviesCopy = [...array];

  MoviesCopy.sort((a, b) => {
    // Ordenar por año
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    // Ordenar por título si tienen el mismo año
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  console.log("EXERCICE 5 ->", MoviesCopy);
  return MoviesCopy;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
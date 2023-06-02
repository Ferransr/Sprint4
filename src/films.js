// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => {
    return movie.director
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}
// console.log(movies);
// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  let result = array.filter(element => element.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = array.filter(element => element.director === director);
  const scores = result.map(element => element.score);
  const average = scores.reduce((total, score) => total + score, 0) / scores.length;
  return average;
}
// console.log("EXERCICE 3 ->", average);

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
function orderByYear() {

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
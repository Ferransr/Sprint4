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
  const moviesCopy = [...array]; //operador de propagación(spread)=>(no modifica array original)
  console.log("EXERCICE 4 ->", moviesCopy);
  return moviesCopy
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const moviesCopy = [...array];

  moviesCopy.sort((a, b) => {
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
  console.log("EXERCICE 5 ->", moviesCopy);
  return moviesCopy;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesCopy = [...array];
  moviesCopy = array.filter(movie => {
    if (typeof (movie.score) !== 'number');
    else {
      return movie.genre.includes(genre);
    }
  });

  const totalScore = moviesCopy.reduce((accumulator, movie) => accumulator + movie.score, 0);
  const averageScore = Number((totalScore / moviesCopy.length).toFixed(2));

  console.log(`Average score for category "${genre}": ${averageScore}`);
  return averageScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(item => {
    const movieCopy = {...item};

    // Dividir la duración en horas y minutos
    const partesDuracion = movieCopy.duration.split(' ');

    let duracionEnMinutos = 0;

    if (partesDuracion.length === 2) {
      // Extraer las horas y los minutos
      const horas = parseInt(partesDuracion[0]);
      const minutos = parseInt(partesDuracion[1]);

      // Calcular la duración total en minutos
      duracionEnMinutos = horas * 60 + minutos;
    } else if (partesDuracion.length === 1 && partesDuracion[0].includes('h')) {
      // Solo se especifica la duración en horas
      const horas = parseInt(partesDuracion[0]);
      duracionEnMinutos = horas * 60;
    } else {
      // No se puede analizar la duración, asignar 0 minutos
      duracionEnMinutos = 0;
    }

    // Actualizar la propiedad "duration" con la duración en minutos
    movieCopy.duration = duracionEnMinutos;

    return movieCopy;
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = []
  let bestMovie = array.filter(movie => movie.year === year)
    .reduce((a, b) => a.score > b.score ?
      a :
      b)

  result.push(bestMovie)
  return result
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
// Movie application object to manage movies
const movieApp = {
    // Movie list array
    movieList: [],
  
    // Function to add a new movie
    addMovie: function(title, genre, director) {
      const newMovie = {
        title: title,
        genre: genre,
        director: director
      };
      this.movieList.push(newMovie);
      console.log(`Added ${title} to the movie list.`);
    },
  
    // Function to delete a movie by title
    deleteMovie: function(title) {
      const index = this.movieList.findIndex(movie => movie.title === title);
      if (index !== -1) {
        const deletedMovie = this.movieList.splice(index, 1);
        console.log(`Deleted ${title} from the movie list.`);
      } else {
        console.log(`${title} not found in the movie list.`);
      }
    },
  
    // Function to display the movie list
    displayMovies: function() {
      console.log("Movie List:");
      this.movieList.forEach(movie => {
        console.log(`Title: ${movie.title},
                     Genre: ${movie.genre},
                     Director: ${movie.director}`);
      });
    }
  };
  
// Example to addMovie: Function Invocation
  movieApp.addMovie("Inception", "Sci-Fi", "Christopher Nolan");
  movieApp.addMovie("The Dark Knight", "Action", "Christopher Nolan");

  // Example to DsiplayMovie: Function Invocation
  movieApp.displayMovies();
  
  // Example to DeleteMovie: Function Invocation
  movieApp.deleteMovie("Inception");
  movieApp.displayMovies();
  
const express = require('express');
const {getMovieByTitle,getMovies, getMovieById, getMovieByGenre, getMovieByYear, postMovie, putMovie, deleteMovie} = require('../controllers/movies.controllers');
const moviesRoutes = express.Router();

moviesRoutes.get('/', getMovies)

moviesRoutes.get("/title/:title", getMovieByTitle)

moviesRoutes.get("/:id", getMovieById)

moviesRoutes.get("/genre/:genre", getMovieByGenre)

moviesRoutes.get("/year/:year", getMovieByYear)

moviesRoutes.post('/', postMovie)

moviesRoutes.put('/:id', putMovie)

moviesRoutes.delete('/:id', deleteMovie)

module.exports= moviesRoutes;
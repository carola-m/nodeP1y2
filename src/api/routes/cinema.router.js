const express = require('express');

const {getCinema, postCinema, putCinema, deleteCinema} = require('../controllers/cinema.controller');
const cinemaRoutes = express.Router();

cinemaRoutes.get('/', getCinema)
cinemaRoutes.post('/', postCinema)
cinemaRoutes.put('/', putCinema)
cinemaRoutes.delete('/:id', deleteCinema)


module.exports = cinemaRoutes;
const Movie = require ("../modells/movies.model")

const getMovies = async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        const movies = await Movie.findById(id);
        if(!movies){
           return res.status(404).json({message: 'No tenemos pelis con ese ID'}); 
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByTitle = async(req, res) => {
        try {
            const {title} = req.params;
            const movies = await Movie.find({title: title}, 'title id');
            if(movies.length == 0){
               return res.status(404).json({message: 'no hay pelis'}); 
            }
            return res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

const getMovieByGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        const movies = await Movie.find({genre: genre}, 'title genre');
        if(movies.length == 0){
           return res.status(404).json({message: 'no hay pelis'}); 
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByYear = async (req, res) => {
    try {
        const {year} = req.params;
        const movies = await Movie.find({year:{$gt:year}}, 'title year');
        if(movies.length == 0){
           return res.status(404).json({message: 'no hay pelis'}); 
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postMovie = async(req, res) => {
    try {
        console.log(req.body);
        const newMovie = new Movie (req.body);
        const createdMovie = await newMovie.save();   //el metodo save nos sirve para guardar un elemento en BBDD
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putMovie = async(req, res) => {
    try {
        const {id} = req.params; //destructuring del objeto, me quedo con el id.. por eso esta entre llaves
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        if(!updatedMovie){
            return res.status(404).json({message:'No tenemos peliculas con ese ID'}); 
         }
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);
        if(!deleteMovie){
            return res.status(404).json({message: 'No tenemos peliculas con ese ID'}); 
         }
        return res.status(200).json(deleteMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//exporto la funcion entera, por eso va entre llaves

module.exports = {getMovieByTitle,getMovies, getMovieByGenre, getMovieById, getMovieByYear, postMovie, putMovie, deleteMovie}
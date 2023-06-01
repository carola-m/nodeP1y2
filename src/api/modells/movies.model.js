const mongoose = require('mongoose');

//Vamos a obtener el esquema de mongoose, lo tiene la libreria de mongoose
const Schema = mongoose.Schema;
const moviesSchema = new Schema(

    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: true},
        genre:{type: String, required: true},
    },{
        timestamps: true //te genera fecha de creación y de modificación automaticas
    }
)

const Movie = mongoose.model('movie', moviesSchema);

module.exports = Movie;
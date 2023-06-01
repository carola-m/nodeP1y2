const mongoose = require('mongoose');

//Vamos a obtener el esquema de mongoose, lo tiene la libreria de mongoose
const Schema = mongoose.Schema;
const cinemaSchema = new Schema(

    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'movie'}],
    },{
        timestamps: true //te genera fecha de creación y de modificación automaticas
    }
)

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;
const Cinema = require ("../modells/cinema.model")

const getCinema = async(req, res) => {
    try {
        const allCinemas = await Cinema.find().populate("movies", "title director");
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCinema = async(req, res) => {
    try {
        console.log(req.body);
        const newCinema = new Cinema (req.body);
        const createdCinema = await newCinema.save();   //el metodo save nos sirve para guardar un elemento en BBDD
        return res.status(201).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCinema = async(req, res) => {
    try {
        const {id} = req.params; //destructuring del objeto, me quedo con el id.. por eso esta entre llaves
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true});
        if(!updatedCinema){
            return res.status(404).json({message:'No tenemos peliculas con ese ID'}); 
         }
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCinema = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteCinema = await Cinema.findByIdAndDelete(id);
        if(!deleteCinema){
            return res.status(404).json({message: 'No tenemos peliculas con ese ID'}); 
         }
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//exporto la funcion entera, por eso va entre llaves

module.exports = {getCinema, postCinema, putCinema, deleteCinema}
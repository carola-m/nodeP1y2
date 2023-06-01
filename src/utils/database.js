const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://root:root@cluster0.160kwbh.mongodb.net/movies?retryWrites=true&w=majority";

const connect = async() => {
    try {
        //Conectamos a nuestra BBDD

        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;

        console.log(`Connected to ${name} DB in host:${host}`);
    } catch (error) {
        console.log("Hemos tenido un error al conectar a la BBDD", error);
    }
}

module.exports = {connect};
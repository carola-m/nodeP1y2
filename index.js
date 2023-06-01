const express = require('express');
const {connect} = require('./src/utils/database');
const moviesRoutes = require('./src/api/routes/movies.router');
const cinemaRoutes = require ('./src/api/routes/cinema.router');
const PORT = 5000;

const app = express();
connect();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/cinema', cinemaRoutes);
app.use('/movie', moviesRoutes);

app.use('*', (req, res)=>{
    res.status(404).json('Route not found');
  })
  
  app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(`Error: ${error.message || "Unexpected error"}`);
  })
  
app.listen(PORT, () => console.log('escuchando en puerto:', PORT));
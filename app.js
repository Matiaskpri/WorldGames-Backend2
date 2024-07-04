const express = require('express');
const gamesRoutes = require('./src/routers/gamesRoutes');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/games',gamesRoutes);


app.listen(port , ()=>{
    console.log(`el servidor esta encendido en http://localhost:${port}`);
});
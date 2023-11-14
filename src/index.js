import express from 'express';
import mongoose from 'mongoose';
import router from './routes/inmuebles.js';

const inmuebleRoutes = router;

//servidor
const app = express();

app.listen(4000, () => console.log("el servidos está escuchando index.js"));

app.get('/api', (req,res) => {
    res.send('bienvenido a la api inmuebles')
});

//middleware

app.use(express.json());
app.use('/api', inmuebleRoutes);


//conexion a la bd

const mongoBDURL = 'mongodb://127.0.0.1/finca-db';
const connection = mongoose.connect(mongoBDURL)
    .then(() => console.log("conectado a la bbdd mongo"))
    .catch((err)=> console.log(err));

export default connection;
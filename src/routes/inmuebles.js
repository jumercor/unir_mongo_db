import express from 'express';
import connection from '../index.js';
import modelo from '../models/inmueble.js';

const router = express.Router();

//obtener inmuebles

router.get('/inmuebles', (req,res)=> {
    modelo.find()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
});


//crear inmuebles
router.post('/inmuebles', (req,res)=> {
    const inmueblenuevo = modelo(req.body);
    inmueblenuevo.save()
                 .then((data) => res.json(data))
                 .catch((err) => console.log(err));
});


//actualizar inmuebles por id
router.put('/inmuebles/:id', (req,res) => {
    const {id} = req.params;
    const {piso, letra, extensionM2, nHabitaciones, alquilado, propietario, mail} = req.body;
    modelo.updateOne({id: id},{$set:{piso, letra, extensionM2, nHabitaciones, alquilado, propietario, mail}})
                 .then((data) => res.json(data))
                 .catch((err) => console.log(err));
});

//eliminar inmuebles por id
router.delete('/inmuebles/:id', (req,res) => {
    const {id} = req.params;
    modelo.remove({id: id})
                 .then((data) => res.json(data))
                 .catch((err) => console.log(err));
});

export default router;
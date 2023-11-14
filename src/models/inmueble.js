import mongoose from 'mongoose';
const schema = mongoose.Schema;

const inmuebleSchema = new schema({
    piso: Number,
    letra: String,
    extensionM2: Number,
    nHabitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    mail: String,
    id: Number,
});

const modelo = mongoose.model('inmueble', inmuebleSchema);

export default modelo;
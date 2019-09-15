const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        // Limpie espacios en blanco.
        trim: true,
        // No permitir usuarios repetidos.
        unique: true
    }
}, {
    // Cada vez que queremos un dato va aa agregar la fecha de creación y modificación.
    timestamps: true
});

module.exports = model('User', userSchema);
const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: { 
        type: String,
        required: true
    },
    author: String,
    date: { 
        type: Date,
        default: Date.now
    }
}, {
    // Cada vez que queremos un dato va aa agregar la fecha de creación y modificación.
    timestamps: true
});

module.exports = model('Note', noteSchema);
const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {

    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    console.log(newNote);
    
    await newNote.save();

    res.json({ message: 'Note Saved' });
};

notesCtrl.getNote = async (req, res) => {
    console.log(req.params.id);
    
    const note = await Note.findById(req.params.id);
    console.log(note);
    
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    console.log(req.params.id, req.body);
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title,
        author,
        content
    });
    res.json({ message: 'Note updated' });
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' })
};

module.exports = notesCtrl;
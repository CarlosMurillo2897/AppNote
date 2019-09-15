const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote);


module.exports = router;
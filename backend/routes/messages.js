const express = require('express')
const {
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage
} = require('../controllers/messageController')

const router = express.Router()

// GET all messages
router.get('/', getAllMessages)

// GET a single message
router.get('/:id', getMessage)

// POST a new message
router.post('/', createMessage)

// DELETE a workout
router.delete('/:id', deleteMessage)

// // UPDATE a workout
router.patch('/:id', updateMessage)

module.exports = router
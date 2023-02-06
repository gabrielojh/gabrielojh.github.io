const express = require('express')
const {
    createMessage,
    getAllMessages,
    getMessage,
} = require('../controllers/messageController')

const router = express.Router()

// GET all messages
router.get('/', getAllMessages)

// GET a single message
router.get('/:id', getMessage)

// POST a new workout
router.post('/', createMessage)

// DELETE a workout
// router.delete('/:id', deleteWorkout)

// // UPDATE a workout
// router.patch('/:id', updateWorkout)

module.exports = router
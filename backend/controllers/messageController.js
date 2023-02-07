const Message = require('../models/messageModel')
const mongoose = require('mongoose')

// GET all messages
const getAllMessages = async(req, res) => {
    const messages = await Message.find({}).sort({createdAt: -1})

    res.status(200).json(messages)
}


// GET a single message
const getMessage = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID!'})
    }
    
    const message = await Message.findById(id) 

    if (!messageOutput) {
        return res.status(404).json({error: 'No such message!'})
    }

    res.status(200).json(messageOutput)
}


// POST a new message
const createMessage = async(req, res) => {
    const {formName, formEmail, formMessage} = req.body

    // Add doc to db
    try {
        const messageOutput = await Message.create({formName, formEmail, formMessage})
        res.status(200).json(messageOutput)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// DELETE a message
const deleteMessage = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID!'})
    }

    const messageOutput = await Message.findOneAndDelete({_id: id})

    if (!messageOutput) {
        return res.status(404).json({error: 'No such message!'})
    }

    res.status(200).json({msg: 'Message deleted'}, messageOutput)
}


// PATCH a message
const updateMessage = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID!'})
    }

    const messageOutput = await Message.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!messageOutput) {
        return res.status(404).json({error: 'No such message!'})
    }

    return res.status(200).json(messageOutput)
}


module.exports = {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
}
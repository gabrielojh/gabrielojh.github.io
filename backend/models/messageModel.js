const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    formName: {
        type: String,
        required: true
    },
    formEmail: {
        type: String,
        required: true
    },
    formMessage: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Message', messageSchema)
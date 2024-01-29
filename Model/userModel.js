//  import mongoose

const mongoose = require('mongoose')

// create schema - need to use schema class in mongoose

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
   email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

// create modal

const users = mongoose.model("users",userSchema)
module.exports =users
// export modal



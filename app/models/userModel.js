const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema ({
    userId : {
        type : String,
        default : '',
        index : true,
        unique : true
    },
    firstName : {
        type : String,
        default : ''
    },
    lastName : {
        type : String,
        default : ''
    },
    country :{
        type : String,
        default : ''
    },
    mobileNumber : {
        type : Number,
        default : 0
    },
    email : {
        type : String,
        default : ''
    },
    password : {
        type : String,
        default : ''
    },
    isAdmin : {
        type : Boolean,
        default:false
    },
    uniqueUserName : {
        type : String,
        default : ''
    },
    createdOn : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('User', User)
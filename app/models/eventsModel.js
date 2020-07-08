const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Event = new Schema ({
    eventId : {
        type : String,
        default : '',
        unique : true,
        required : true
    },
    eventTitle : {
        type : String,
        default : ''
    },
    creatorName : {
        type : String,
        default : ''
    },
    creatorId : {
        type : String,
        default : ''
    },
    userId : {
        type : String,
        default : ''
    },
    startDate : {
        type : String,
        default : ''
    },
    startTime : {
        hour:Number,
        minute:Number,
        second:{
            type : Number,
            default:''
        }
    },
    endDate : {
        type : String,
        default : ''
    },
    endTime : {
        hour:Number,
        minute:Number,
        second:{
            type : Number,
            default:''
        }
    },
    color : {
        type : String,
        default : ''
    },
    createdOn : {
        type : Date,
        default : Date.now()
    },
    modifiedOn : {
        type : Date,
        default : ""
    },
})

module.exports = mongoose.model('Event', Event)
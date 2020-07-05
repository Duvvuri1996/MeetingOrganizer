const mongoose = require('mongoose')
const shortid = require('shortid')
const userModel = mongoose.model('User')
const authModel = mongoose.model('Auth')
const eventModel = mongoose.model('Event')
const nodemailer = require('nodemailer')
const check = require('../libs/checkLib')
const logger = require('../libs/logger')
const validateInput = require('../libs/paramsValidationLib')
const response = require('../libs/responseLib')
const token = require('../libs/tokenLib')
const passwordLib = require('../libs/passwordLib')
const time = require('../libs/timLib')
const appConfig = require('../Configuration/appConfig')


let getAllEvents = (req, res) => {
    eventModel.find()
        .select(-id - _v)
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, "getAllEvents function", 10)
                let apiResponse = response.generate(true, "Failed to retrieve data", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info("No events found", "getAllEvents function")
                let apiResponse = response.generate(true, "No events found", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = (false, "Events found", 200, result)
                res.send(apiResponse)
            }
        })
} //end getAllEvents function

let getCountOfAllEvents = (req, res) => {
    eventModel.countDocuments()
        .exec((err, count) => {
            if (err) {
                logger.error(err.message, "getCountOfAllEvents function", 10)
                let apiResponse = response.generate(true, "Failed to retrieve data", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = (false, " Count retireved", 200, count)
                res.send(apiResponse)
            }
        })
} //end getCountOfAllEvents function

let getSingleEventByEventId = (req, res) => {
    eventModel.findOne({
        eventId: req.params.eventId
    }, (err, eventDetails) => {
        if (err) {
            logger.error(err.message, "getSingleEventByEventId function", 10)
            let apiResponse = response.generate(true, "Failed to retrieve data", 404, null)
            res.send(apiResponse)
        } else if (check.isEmpty(eventDetails)) {
            logger.info("No events found", "getSingleEventByEventId function")
            let apiResponse = response.generate(true, "Event not found for the given eventid", 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = (false, " Event found", 200, eventDetails)
            res.send(apiResponse)
        }
    })
} //end getSingleEvent function

let getAllEventsOfSingleUser = (req, res) => {
    if (req.params.userId) {
        eventModel.findOne({
            userId: req.params.userId
        }, (err, userEventDetails) => {
            if (err) {
                logger.error(err.message, "getAllEventsOfSingleUser function", 10)
                let apiResponse = response.generate(true, "Failed to retrieve data", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(userEventDetails)) {
                logger.info("No events found", "getAllEventsOfSingleUser function")
                let apiResponse = response.generate(true, "No events found for the given user", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = (false, " Events found", 200, userEventDetails)
                res.send(apiResponse)
            }
        })
    } else {
        let apiResponse = response.generate(true, "Body parameter missing for userId", 400, null)
        res.send(apiResponse)
    }

} //end getAllEventsOfSingleUser function

let getAllEventsCountOfSingleUser = (req, res) => {
    if (req.params.userId) {
        eventModel.count({
            userId: req.params.userId
        }, (err, count) => {
            if (err) {
                logger.error(err.message, "getAllEventsCountOfSingleUser function", 10)
                let apiResponse = response.generate(true, "Failed to retireve data", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Count retrieved", 200, count)
                res.send(apiResponse)
            }
        })
    }
} //end getAllEventsCountOfSingleUser function

let createEvent = (req, res) => {
    let today = Date.now()
    let newEvent = new eventModel({
        eventId: shortid.generate(),
        eventTitle: req.body.eventTitle,
        userId: req.body.userId,
        startDate: req.body.startDate,
        startTime: {
            hour: (req.body.endTime).slice(0, 2),
            minute: (req.body.endTime).slice(3, 5),
            second: (req.body.endTime).slice(6)
        },
        endDate: req.body.endDate,
        endTime: {
            hour: (req.body.endTime).slice(0, 2),
            minute: (req.body.endTime).slice(3, 5),
            second: (req.body.endTime).slice(6)
        },
        createdOn: today
    })
    newEvent.save((err, result) => {
        if (err) {
            logger.error(err.message, "createEvent function", 10)
            let apiResponse = response.generate(true, "Failed to create event", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Event created successfully and sent a mail", 200, result)
            res.send(apiResponse)
            userModel.findOne({
                userId: result.userId
            }, (err, userDetails) => {
                if (err) {
                    logger.error(err.message, "createEvent function", 10)
                } else if (check.isEmpty(userDetails)) {
                    logger.info("No user found or no longer exists", "createEvent function")
                } else {

                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: appConfig.mailer.auth.user,
                            pass: appConfig.mailer.auth.pass
                        }
                    })
                    let mailOptions = {
                        from: appConfig.mailer.auth.user,
                        to: userDetails.email,
                        subject: `Event created`,
                        text: `Please check your calender for changes as new event is being created`
                    }
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log("Error occured while sending email from createEvent")
                            console.log(err)
                        } else {
                            console.log("Email senet successfully from createEvent")
                            console.log(info)
                        }
                    })
                }

            })


        }
    })

} //end createEvent

let deleteEventByEventId = (req, res) => {
    let userEmail
    eventModel.findOne({
            'eventId': req.params.eventId
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'deleteEventByEventId', 10)
            } else if (check.isEmpty(result)) {
                logger.info('No event found', 'deleteEventByEventId')
            } else {
                userEmail = result.userEmail
                eventModel.deleteOne({
                    'eventId': req.params.eventId
                }, (err, result) => {
                    if (err) {
                        logger.error(err.message, "deleteEventByEventId", 5)
                        let apiResponse = response.generate(true, "Failed to delete", 500, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, "Event deleted successfully and sent a mail", 200, null)
                        res.send(apiResponse)
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: appConfig.mailer.auth.user,
                                pass: appConfig.mailer.auth.pass
                            }
                        })
                        let mailOptions = {
                            from: appConfig.mailer.auth.user,
                            to: userEmail,
                            subject: `Event deleted`,
                            text: `Please check your calender for changes`
                        }
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) {
                                console.log("Error while sending an email from deleteEventByEventId")
                                console.log(err)
                            } else {
                                console.log("Successfully sent email from deleteEventByEventId")
                                console.log(info)
                            }
                        })
                    }
                })
            }
        })
} //end deleteEventByEventID

let editEventByEventId = (req, res) => {
    let options = req.body;
    eventModel.findOneAndUpdate({
        'eventId': req.params.eventId
    }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'editEventByEventId', 10)
            let apiResponse = response.generate(true, 'Failed To edit event details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No event Found', 'editEventByEventId')
            let apiResponse = response.generate(true, 'No event Found', 404, null)
            res.send(apiResponse)
        } else {
            result.modifiedOn = Date.now()
            let apiResponse = response.generate(false, 'Event details edited', 200, result)
            res.send(apiResponse)
            userModel.findOne({
                userId: result.userId
            }, (err, retrievedUserDetails) => {
                if (err) {
                    logger.error(err.message, 'editEventByEventId')
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('No user Found', 'editEventByEventId')
                } else {
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: appConfig.mailer.auth.user,
                            pass: appConfig.mailer.auth.pass
                        }
                    })
                    let mailOptions = {
                        from: appConfig.mailer.auth.user,
                        to: retrievedUserDetails.email,
                        subject: `Event changes`,
                        text: `Please check your calender for changes`
                    }
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log("Error while sending an email from deleteEventByEventId")
                            console.log(err)
                        } else {
                            console.log("Successfully sent email from deleteEventByEventId")
                            console.log(info)
                        }
                    })
                }

            })

        }
    })

} //end editEventByEventId

module.exports = {
    getAllEvents: getAllEvents,
    getCountOfAllEvents: getCountOfAllEvents,
    getSingleEventByEventId: getSingleEventByEventId,
    getAllEventsOfSingleUser: getAllEventsOfSingleUser,
    getAllEventsCountOfSingleUser: getAllEventsCountOfSingleUser,
    createEvent: createEvent,
    deleteEventByEventId: deleteEventByEventId,
    editEventByEventId: editEventByEventId
}
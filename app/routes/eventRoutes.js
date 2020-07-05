const express = require('express')
const appConfig = require('../Configuration/appConfig')
const auth = require('../middlewares/auth')
const eventController = require('../controllers/eventController')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/events`

    app.get(`${baseUrl}/all`, auth.isAuthorized, eventController.getAllEvents)

    app.get(`${baseUrl}/all/:userId`, auth.isAuthorized, eventController.getAllEventsOfSingleUser)

    app.get(`${baseUrl}/:eventId`, auth.isAuthorized, eventController.getSingleEventByEventId)

    app.get(`${baseUrl}/count/all`, auth.isAuthorized, eventController.getCountOfAllEvents)

    app.get(`${baseUrl}/count/:userId`, auth.isAuthorized, eventController.getAllEventsCountOfSingleUser)

    app.post(`${baseUrl}/create`, auth.isAuthorized, eventController.createEvent)

    app.post(`${baseUrl}/delete/:eventId`, auth.isAuthorized, eventController.deleteEventByEventId)

    app.put(`${baseUrl}/edit/:eventId`, auth.isAuthorized, eventController.editEventByEventId)

}
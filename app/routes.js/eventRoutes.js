const express = require('express')
const appConfig = require('../Configuration/appConfig')
const auth = require('../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/events`

    app.get(`${baseUrl}/all`, auth.isAuthorized, getAllEvents)

    app.get(`${baseUrl}/all/:userId`, auth.isAuthorized, getAllEventsOfSingleUser)

    app.get(`${baseUrl}/:eventId`, auth.isAuthorized, getSingleEvent)

    app.get(`${baseUrl}/count/all`, auth.isAuthorized, getCountOfAllEvents)

    app.get(`${baseUrl}/count/:userId`, auth.isAuthorized, getAllEventsCountOfSingleUser)

    app.post(`${baseUrl}/create`, auth.isAuthorized, createEvent)

    app.post(`${baseUrl}/delete/:eventId`, auth.isAuthorized, deleteEventByEventId)

    app.put(`${baseUrl}/edit/:eventId`, auth.isAuthorized, editEvent)

}
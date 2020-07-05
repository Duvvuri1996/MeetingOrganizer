const express = require('express');

const appConfig = require('../Configuration/appConfig');
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController')

module.exports.setRouter = (app) => {

let baseUrl = `${appConfig.apiVersion}/user`

app.get(`${baseUrl}/all`, auth.isAuthorized, userController.getAllUsers)

app.get(`${baseUrl}/all/normal`, auth.isAuthorized, userController.getAllNormalUsers)

app.get(`${baseUrl}/all/admin`, auth.isAuthorized, userController.getAllAdminUsers)

app.get(`${baseUrl}/:userId`, auth.isAuthorized, userController.getUserByUserId)

app.post(`${baseUrl}/signup`, userController.signUpFunction)

app.post(`${baseUrl}/login`, userController.loginFunction)

app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logoutFunction)

app.post(`${baseUrl}/delete/:userId`, auth.isAuthorized, userController.deleteUserByUserId)

app.post(`${baseUrl}/recoverymail`, userController.recoveryMail)

app.post(`${baseUrl}/resetpassword/:recoveryToken`, userController.resetPassword)

app.get(`${baseUrl}/count/normal`, auth.isAuthorized, userController.getAllNormalUsersCount)

app.get(`${baseUrl}count/admin`, auth.isAuthorized, userController.getAllAdminUsersCount)

}
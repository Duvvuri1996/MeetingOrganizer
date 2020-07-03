const express = require('express');
const router = require.Router();
const appConfig = require('../Configuration/appConfig');
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {

let baseUrl = `${appConfig.apiVersion}/user`

app.get(`${baseUrl}/all`, auth.isAuthorized, userController.getAllUsers)

app.get(`${baseUrl}/all/normal`, auth.isAuthorized, userController.getAllNormalUsers)

app.get(`${baseUrl}/all/admin`, auth.isAuthorized, userController.getAllAdminUsers)

app.get(`${baseUrl}/:userId`, auth.isAuthorized, userController.getUserByUserId)

app.post(`${baseUrl}/signup`, auth.isAuthorized, userController.signUpFunction)

app.post(`${baseUrl}/login`, auth.isAuthorized, userController.loginFunction)

app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logoutFunction)

app.post(`${baseUrl}/delete/:userId`, auth.isAuthorized, userController.deleteUser)

app.post(`${baseUrl}/recoverymail/password`, auth.isAuthorized, userController.recoveryMail)

app.post(`${baseUrl}/restpassword/:authToken`, auth.isAuthorized, userController.resetPassword)

app.get(`${baseUrl}/count/normal`, auth.isAuthorized, userController.getAllNormalUsersCount)

app.get(`${baseUrl}count/admin`, auth.isAuthorized, userController.getAllAdminUsersCount)

}
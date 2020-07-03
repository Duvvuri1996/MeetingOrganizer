const express = require('express')
const shortid = require('shortid')
const appConfig = require('../Configuration/appConfig')
const Auth = require('../middlewares/auth')

let baseUrl = `${appConfig.apiVersion}/user`

app.get(`${baseUrl}/all`, Auth.isAuthorized, userController.getAllUsers)

app.get(`${baseUrl}/all/normal`, Auth.isAuthorized, userController.getAllNormalUsers)

app.get(`${baseUrl}/all/admin`, Auth.isAuthorized, userController.getAllAdminUsers)

app.get(`${baseUrl}/:userId`, Auth.isAuthorized, userController.getUserByUserId)

app.post(`${baseUrl}/signup`, Auth.isAuthorized, userController.signUpFunction)

app.post(`${baseUrl}/login`, Auth.isAuthorized, userController.loginFunction)

app.post(`${baseUrl}/logout`, Auth.isAuthorized, userController.logoutFunction)

app.post(`${baseUrl}/:userId/delete`, Auth.isAuthorized, userController.deleteUser)

app.post(`${baseUrl}/recoverymail/password`, Auth.isAuthorized, userController.recoveryMail)

app.post(`${baseUrl}/rest/paswrd/:authToken`, Auth.isAuthorized, userController.resetPassword)

app.get(`${baseUrl}/all/count`, Auth.isAuthorized, userController.getAllUsersCount)

app.get(`${baseUrl}/all/normal/count`, Auth.isAuthorized, userController.getAllNormalUsersCount)

app.get(`${baseUrl}/all/admin/count`, Auth.isAuthorized, userController.getAllAdminUsersCount)


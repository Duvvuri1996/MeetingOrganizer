const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid')

const authModel = mongoose.model('Auth')
const userModel = mongoose.model('User')
const check = require('../libs/checkLib')
const logger = require('../libs/logger')
const validateInput = require('../libs/paramsValidationLib')
const response = require('../libs/responseLib')
const token = require('../libs/tokenLib')
const passwordLib = require('../libs/passwordLib')
const time = require('../libs/timLib')
const tokenLib = require('../libs/tokenLib')

/**Get all users */
let getAllUsers = (req, res) => {
    userModel.find()
        .select(' -_v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllUsers', 10)
                let apiResponse = response.generate(true, "Failed to find user", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No user Found', 'getAllUser', 10)
                let apiResponse = response.generate(true, "No user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "All user details found", 200, result)
                res.send(apiResponse)
            }
        })
} // end get all users

let getAllNormalUsers = (req, res) => {
    userModel.find({
        isAdmin: false
    }, (err, result) => {
        if (err) {
            logger.error(err.message, 'getAllNormalUsers', 10)
            let apiResponse = response.generate(true, "Failed to find normal user", 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.error('No user Found', 'getAllNormalUser', 10)
            let apiResponse = response.generate(true, "No user found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "All normal user details found", 200, result)
            res.send(apiResponse)
        }
    })
} //get all normal users

let getAllAdminUsers = (req, res) => {
    userModel.find({
            isAdmin: true
        })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllAdminUsers', 10)
                let apiResponse = response.generate(true, "Failed to find admin user", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No user Found', 'getAllAdminUser', 10)
                let apiResponse = response.generate(true, "No user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "All admin user details found", 200, result)
                res.send(apiResponse)
            }
        })
} //get all admin users

let getUserByUserId = (req, res) => {
    userModel.findOne({
            'userId': req.params.userId
        })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getUserByUserId', 10)
                let apiResponse = response.generate(true, "Failed to find user", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No user Found', 'getUserByuserId', 10)
                let apiResponse = response.generate(true, "No user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "User with specified userId found", 200, result)
                res.send(apiResponse)
            }
        })
} //end get user by userid

let getAllNormalUsersCount = (req, res) => {
    userModel.count({
            isAdmin: false
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllNormalUsersCount', 10)
                let apiResponse = response.generate(true, "Failed to retrieve normal users data", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No normal user found', 'getAllNormalUsersCount', 10)
                let apiResponse = response.generate(true, "No normal user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Count retrieved of all normal users", 200, result)
                res.send(apiResponse)
            }
        })
} //end getAllNormalUsersCount

let getAllAdminUsersCount = (req, res) => {
    userModel.count({
            isAdmin: true
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllAdminUsersCount', 10)
                let apiResponse = response.generate(true, "Failed to retrieve admin users data", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No admin user found', 'getAllAdminUsersCount', 10)
                let apiResponse = response.generate(true, "No admin user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Count retrieved of all admin users", 200, result)
                res.send(apiResponse)
            }
        })
} // end getAllAdminUsersCount

let deleteUserByUserId = (req, res) => {
    userModel.findOneAndRemove({
            'userId': req.params.userId
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'deleteUserByUserId', 10)
                let apiResponse = response.generate(true, "Failed to delete user", 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.error('No user found', 'deleteUserByUserId', 10)
                let apiResponse = response.generate(true, "No user found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Successfully deleted user", 200, result)
                res.send(apiResponse)
            }
        })
} //end deleteUserByUserId

let signUpFunction = (req, res) => {
    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, "Email does not met the requirement", 400, null)
                    reject(apiResponse)
                } else if (check.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, "Password missing", 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                let apiResponse = response.generate(true, "Onr or more parameter(s) missing in the field", 400, null)
                reject(apiResponse)
            }

        })
    } //end validate user detalis

    let createUser = () => {
        return new Promise((resolve, reject) => {
            userModel.findOne({
                    email: req.body.email
                })
                .exec((err, foundUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'createUser', 10)
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(foundUserDetails)) {
                        console.log(req.body)
                        let newUser = new userModel({
                            userId: shortid.generate(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            country: req.body.country,
                            mobileNumber: req.body.mobileNumber,
                            email: req.body.email,
                            password: passwordLib.hashPassword(req.body.password),
                            isAdmin: req.body.isAdmin,
                            uniqueUserName: req.body.uniqueUserName,
                            createdOn: time.now()
                        })

                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'createUser', 10)
                                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('User Cannot Be Created.User Already Present', 'userController: createUser', 4)
                        let apiResponse = response.generate(true, 'User Already Present With this Email', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    } //end create user
    validateParams(req, res)
        .then(createUser)
        .then((resolve) => {
            delete resolve.password
            let apiResponse = response.generate(false, 'User created successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

} //end signup function

let loginFunction = (req, res) => {
    let findUser = () => {
        console.log('findUser function is called')
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log(req.body)
                userModel.findOne({
                        email: req.body.email
                    })
                    .exec((err, userDetails) => {
                        if (err) {
                            let apiResponse = response.generate(true, "Failed to find user", 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(userDetails)) {
                            let apiResponse = response.generate(true, "No user Found", 404, null)
                            reject(apiResponse)
                        } else {
                            resolve(userDetails)
                        }
                    })
            } else {
                let apiResponse = response.generate(true, "Email parameter is missing in the body parameter", 400, null)
                reject(apiResponse)
            }

        })
    } //end findUser

    let validatePasswordInput = (userDetails) => {
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, userDetails.password, (err, isMatch) => {
                if (err) {
                    let apiResponse = response.generate(true, "Login failed", 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let userDetails = userDetails.toObject()
                    delete userDetails.password
                    delete userDetails._id
                    delete userDetails._v
                    delete userDetails.createdOn
                    delete userDetails.modifiedOn
                    resolve(userDetails)
                } else {
                    let apiResponse = response.generate(true, "Invalid login password", 400, null)
                    reject(apiResponse)
                }
            })
        })
    } //end validatePasswordInput

    let generateToken = (userDetails) => {
        console.log("Generate token is called")
        return new Promise((resolve, reject) => {
            token.generateJwt(userDetails, (err,tokenDetails) => {
                if(err) {
                    let apiResponse = response.generate(true, "Failed to generate token", 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId;
                    tokenDetails.userDetails = userDetails;
                    resolve(tokenDetails)
                }
            })
        })
    } //end generateToken function

    let saveToken = (tokenDetails) => {
        console.log("SaveToken function is called")
        return new Promise((resolve,reject) => {
            authModel.findOne({userId : tokenDetails.userId}, (err,foundTokenDetails) => {
                if(err) {
                    let apiResponse = response.generate(true, "Failed to find userId", 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(foundTokenDetails)) {
                    let newAuthToken = new authModel({
                        userId : tokenDetails.userId,
                        uniqueUserName : tokenDetails.uniqueUserName,
                        authToken : tokenDetails.token,
                        tokenSecret : tokenDetails.tokenSecret,
                        tokenGenarationTime : time.now(),
                        isAdmin : tokenDetails.isAdmin
                    })
                    newAuthToken.save((err,newToken) => {
                        if(err) {
                            let apiResponse = response.generate(true, "Failed to create new token", 500, null)
                            reject(apiResponse)
                        } else{
                            let responseBody = {
                                authToken : newToken.authToken,
                                userDetails : tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    foundTokenDetails.authToken = tokenDetails.authToken
                    foundTokenDetails.userId = tokenDetails.userId
                    foundTokenDetails.uniqueUserName = tokenDetails.uniqueUserName
                    foundTokenDetails.authToken = tokenDetails.authToken
                    foundTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    foundTokenDetails.tokenGenarationTime = tokenDetails.tokenGenarationTime
                    foundTokenDetails.isAdmin = tokenDetails.isAdmin

                    foundTokenDetails.save((err,newToken) => {
                        if(err) {
                            let apiResponse = response.generate(true, "Failed to update newToken", 500, null)
                            reject(apiResponse)
                        } else{
                            let responseBody = {
                                authToken : newToken.authToken,
                                userDetails : tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })

                }
            })
        })
    } //end saveToken function
    
    findUser(req,res)
    .then(validatePasswordInput)
    .then(generateToken)
    .then(saveToken)
    .then((resolve) => {
        let apiResponse = response.generate(false, "Login successfull", 200, resolve)
        res.status(200)
        res.send(apiResponse)
    })
    .catch((err) => {
        console.log(err)
        res.send(err.status)
        res.send(err)
    })
} //end login function
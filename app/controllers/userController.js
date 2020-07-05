const mongoose = require('mongoose')
const shortid = require('shortid')
const nodemailer = require('nodemailer')
const authModel = mongoose.model('Auth')
const userModel = mongoose.model('User')



let getAllUsers = (req, res) => {
    userModel.find()
        .select(' -_v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllUsers', 10)
                let apiResponse = response.generate(true, "Failed to find user", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No user Found', 'getAllUser')
                let apiResponse = response.generate(true, "No user found", 500, null)
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
            let apiResponse = response.generate(true, "Failed to find normal user", 404, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No user Found', 'getAllNormalUsers')
            let apiResponse = response.generate(true, "No user found", 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "All normal user details found", 200, result)
            res.send(apiResponse)
        }
    })
} //end get all normal users

let getAllAdminUsers = (req, res) => {
    userModel.find({
            isAdmin: true
        })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllAdminUsers', 10)
                let apiResponse = response.generate(true, "Failed to find admin user", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No user Found', 'getAllAdminUsers')
                let apiResponse = response.generate(true, "No user found", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "All admin user details found", 200, result)
                res.send(apiResponse)
            }
        })
} //end get all admin users

let getUserByUserId = (req, res) => {
    userModel.findOne({
            'userId': req.params.userId
        })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getUserByUserId', 10)
                let apiResponse = response.generate(true, "Failed to find user", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No user Found', 'getUserByuserId')
                let apiResponse = response.generate(true, "No user found", 500, null)
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
                let apiResponse = response.generate(true, "Failed to retrieve normal users data", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No normal user found', 'getAllNormalUsersCount')
                let apiResponse = response.generate(true, "No normal user found", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Count retrieved of all normal users", 200, result)
                res.send(apiResponse)
            }
        })
} //end getAllNormalUsersCount function

let getAllAdminUsersCount = (req, res) => {
    userModel.count({
            isAdmin: true
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'getAllAdminUsersCount', 10)
                let apiResponse = response.generate(true, "Failed to retrieve admin users data", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No admin user found', 'getAllAdminUsersCount')
                let apiResponse = response.generate(true, "No admin user found", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Count retrieved of all admin users", 200, result)
                res.send(apiResponse)
            }
        })
} // end getAllAdminUsersCount function

let deleteUserByUserId = (req, res) => {
    userModel.findOneAndRemove({
            'userId': req.params.userId
        })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'deleteUserByUserId', 10)
                let apiResponse = response.generate(true, "Failed to delete user", 404, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No user found', 'deleteUserByUserId')
                let apiResponse = response.generate(true, "No user found", 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "Successfully deleted user", 200, result)
                res.send(apiResponse)
            }
        })
} //end deleteUserByUserId function

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
    } //end validate user detalis function

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
    } //end create user function
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
    } //end findUser function

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
    } //end validatePasswordInput function

    let generateToken = (userDetails) => {
        console.log("Generate token is called")
        return new Promise((resolve, reject) => {
            token.generateJwt(userDetails, (err, tokenDetails) => {
                if (err) {
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
        return new Promise((resolve, reject) => {
            authModel.findOne({
                userId: tokenDetails.userId
            }, (err, foundTokenDetails) => {
                if (err) {
                    let apiResponse = response.generate(true, "Failed to find userId", 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(foundTokenDetails)) {
                    let newAuthToken = new authModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenarationTime: time.now(),
                        isAdmin: tokenDetails.isAdmin
                    })
                    if (isAdmin === true) {
                        newAuthToken.uniqueUserName = tokenDetails.uniqueUserName + '-admin'
                    } else {
                        newAuthToken.uniqueUserName = tokenDetails.uniqueUserName
                    }
                    newAuthToken.save((err, newToken) => {
                        if (err) {
                            let apiResponse = response.generate(true, "Failed to create new token", 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newToken.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    foundTokenDetails.authToken = tokenDetails.authToken
                    foundTokenDetails.userId = tokenDetails.userId
                    foundTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    foundTokenDetails.tokenGenarationTime = tokenDetails.tokenGenarationTime
                    foundTokenDetails.isAdmin = tokenDetails.isAdmin
                    if (isAdmin === true) {
                        foundTokenDetails.uniqueUserName = tokenDetails.uniqueUserName + '-admin'
                    } else {
                        foundTokenDetails.uniqueUserName = tokenDetails.uniqueUserName
                    }

                    foundTokenDetails.save((err, newToken) => {
                        if (err) {
                            let apiResponse = response.generate(true, "Failed to update newToken", 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newToken.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })

                }
            })
        })
    } //end saveToken function

    findUser(req, res)
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

let logoutFunction = (req, res) => {
    authModel.findOneAndRemove({
        userid: req.user.userId
    }, (err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'logoutFunction', 10)
            let apiResponse = response.generate(true, `error occurred at: ${err.message}`, 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Logged Out or Invalid UserId', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
            res.send(apiResponse)
        }
    })
} //end logout function

let recoveryMail = (req, res) => {
    let generateToken = () => {
        return new Promise((resolve, reject) => {
            userModel.findOne({
                email: req.body.email
            }, (err, userDetails) => {
                if (err) {
                    let apiResponse = response.generate(true, "User does not exists", 404, null)
                    reject(apiResponse)
                } else {
                    userDetails.recoveryToken = shortid.generate()
                    userDetails.recoveryTokenExpiration = Date.now() + 3600000
                }
                userDetails.save((err, user) => {
                    if (err) {
                        let apiResponse = response.generate(true, "Failed to save", 400, null)
                        reject(apiResponse)
                    } else {
                        resolve(user)
                    }

                })
            })
        })
    }//end generateToken function

    let sendMail = (userInfo) => {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: appConfig.mailer.auth.user,
                    pass: appConfig.mailer.auth.pass
                }
            })
            let mailOptions = {
                from: appConfig.mailer.auth.user,
                to: userInfo.email,
                subject: 'Reset password',
                html: 'You are receiving this because you have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link to complete the process:\n\n' +
                    "<a'http://localhost:3000/'+appConfig.apiVersion+'resetpassword/'+userInfo.recoveryToken></a>"
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    let apiResposne = response.generate(true, "Failed to send mail link", 500, null)
                    reject(apiResposne)
                } else {
                    resolve(info)
                }
            })
        })
    }//end senEmail function
    generateToken(req, res)
        .then(sendMail)
        .then((resolve) => {
            let apiResposne = response.generate(false, "Mail sent successfully to your email id", 200, null)
            res.send(apiResposne)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

} //end recoveryMail function

let resetPassword = (req, res) => {
    let validateRecoveryToken = () => {
        return new Promise((resolve, reject) => {
            userModel.findOne({
                recoveryToken: req.params.recoveryToken,
                recoveryTokenDetails: {
                    $gt: Date.now()
                }
            }, (err, user) => {
                if (err) {
                    let apiResponse = response.generate(true, "Token has expired or invalid")
                    reject(apiResponse)
                } else {
                    user.password = passwordLib.hashPassword(req.body.password)
                    user.recoveryToken = undefined
                    user.recoveryTokenExpiration = undefined
                }
                user.save((err, details) => {
                    if (err) {
                        let apiResponse = response.generate(true, "Failed to save details...Unknwon error occured", 400, null)
                        reject(apiResponse)
                    } else {
                        resolve(details)
                    }
                })
            })

        })
    }
    validateRecoveryToken(req, res)
        .then((resolve) => {
            let apiResponse = response.generate(false, "Password reset successful...please login to continue", 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
} //end reset password function


module.exports = {
    getAllUsers: getAllUsers,
    getAllNormalUsers: getAllNormalUsers,
    getAllNormalUsersCount: getAllNormalUsersCount,
    getAllAdminUsers: getAllAdminUsers,
    getAllAdminUsersCount: getAllAdminUsersCount,
    getUserByUserId: getUserByUserId,
    deleteUserByUserId: deleteUserByUserId,
    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    recoveryMail : recoveryMail,
    resetPassword : resetPassword
}
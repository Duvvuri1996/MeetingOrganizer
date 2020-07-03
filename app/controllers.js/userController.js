const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid')

const authModel = mongoose.model('Auth')
const userModel = mongoose.model('User')
const check = require('../libs/checkLib')
const logger = require('../libs/logger')
const validateInput = require('../libs/paramsValidationLib')
const password = require('../libs/passwordLib')
const response = require('../libs/responseLib')
const token = require('../libs/tokenLib')

/**Get all users */
let getAllUsers = (req, res) => {
    userModel.find()
    .select(' -_v -_id')
    .lean()
    .exec((err,result) => {
        if(err) {
            logger.error(err.message, 'getAllUsers', 10)
            let apiResponse = response.generate(true, "Failed to find user", 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.error('No user Found', 'getAllUser', 10)
            let apiResponse = response.generate(true, "No user found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "All user details found", 200, result)
            res.send(apiResponse)
        }
    })
} // end get all users

let getAllNormalUsers = (req,res) => {
    userModel.find({isAdmin:false},(err,result) => {
        if(err){
            logger.error(err.message, 'getAllNormalUsers', 10)
            let apiResponse = response.generate(true, "Failed to find normal user", 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.error('No user Found', 'getAllNormalUser', 10)
            let apiResponse = response.generate(true, "No user found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "All normal user details found", 200, result)
            res.send(apiResponse)
        }
    })
}

let getAllAdminUsers = (req,res) => {
    userModel.find({isAdmin:true})
    .select('-password -__v -_id')
    .lean()
    .exec((err,result) => {
        if(err){
            logger.error(err.message, 'getAllAdminUsers', 10)
            let apiResponse = response.generate(true, "Failed to find admin user", 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.error('No user Found', 'getAllAdminUser', 10)
            let apiResponse = response.generate(true, "No user found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "All admin user details found", 200, result)
            res.send(apiResponse)
        }
    })
}

let getUserByUserId = (req,res) => {
    userModel.findOne({'userId' : req.params.userId})
    .select('-password -__v -_id')
    .lean()
    .exec((err,result) => {
        if(err) {
            logger.error(err.message, 'getUserByUserId', 10)
            let apiResponse = response.generate(true, "Failed to find user", 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.error('No user Found', 'getUserByuserId', 10)
            let apiResponse = response.generate(true, "No user found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "User with specified userId found", 200, result)
            res.send(apiResponse)
        }
    })
}
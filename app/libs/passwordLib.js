const bcrypt = require('bcrypt')
const saltRounds = 10

//Custom library
const logger = require('./logger')

let hashPassword = (userPassword) => {
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(userPassword,salt)
}

let comparePassword = (userPassword, hashPassword, cb) => {
    bcrypt.compare(userPassword, hashPassword, (err,res) => {
    if(err) {
        logger.error(err.password, 'Comparison error', 5)
        cb(err,null)
    } else {
        cb(null,res)
    }
})
}

let comparePasswordSync = (userPassword, hashPassword) => {
    return bcrypt.compareSync(userPassword, hashPassword) 
}

module.exports = {
    hashPassword : hashPassword,
    comparePassword : comparePassword,
    comparePasswordSync : comparePasswordSync
}
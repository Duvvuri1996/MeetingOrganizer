const express = require('express')
let setDate = (requestedDate) => {
    let d = new Date(requestedDate)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let monthName = months[month]
    return date+" "+monthName+" "+year
}

module.exports = {
    setDate : setDate
}
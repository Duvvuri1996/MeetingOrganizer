const express = require('express');
const app = express();
const mongoose = require('mongoose')
const AppConfig = require('./app/Configuration/AppConfig')


app.get("/",(req,res) => {
    res.send("Hello...testing")
})

app.listen(AppConfig.port,()=>{
    console.log("Port listening on 3000")

let db = mongoose.connect(AppConfig.db.uri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
})

mongoose.connection.on('error', function(err) {
    console.log("Databse error")
    console.log(err)
})

mongoose.connection.on('open', function(err) {
    if(err){
        console.log("Database error while connecting")
        console.log(err)
    } else {
        console.log("Database connection successfull")
    }
})
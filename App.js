const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee = require("./Model/Employee")

const app = exprerss()
app.use(cors())

app.post("/add", (req, res) => {
    res.send("text")
})
add.post("/search", (req, res) => {
    res.send("test")
})
add.post("/delete", (req, res) => {
    res.send("test")
})
app.get("/view", (req, res) => {
    res.send("test")
})
app.listen(8080, () => {
    console.log("Server started")
})
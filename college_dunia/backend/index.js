const express = require("express")
const app = express()
require("dotenv").config()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const { connection, AccountModel } = require("./model/userModel")

app.get("/", async (req, res) => {
    try {
        console.log("Home Page");
        res.send("Home Page")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.post("/login", (req, res) => {
    console.log("Login page")
    res.send("Login page")
})
app.post("/register", async (req, res) => {
    try {
        const Data = new AccountModel(req.body)
        Data.save() 
        res.send({ "msg": "Account Created Successfull!" })
    } catch (err) {
        res.send({ "Failed to save DB": err })
        console.log({ "Failed to save DB": err })
    }
})
app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Server is connected to DB")
    } catch (err) {
        console.log("DB connection error:", err)
    }
    console.log(`Server is running on port ${process.env.port}`)
})
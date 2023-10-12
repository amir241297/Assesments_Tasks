const mongoose=require('mongoose')
require("dotenv").config()
const connection=mongoose.connect(process.env.mongooseURL)

const accountSchema=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    city:String,
    course:String
})
 
const AccountModel=mongoose.model("Registration",accountSchema)

module.exports={
    connection,
    AccountModel
}
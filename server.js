// Imports
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")


// App + Configurations
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})
mongoose.connection.on("error", (err) => {
    console.log(err)
})

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride("_method"))
app.use(morgan("dev"))


// Routes



// Server Handler
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})
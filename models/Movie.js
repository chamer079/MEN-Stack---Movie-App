// Imports
const mongoose = require("mongoose")


// Schema
const actorSchema = new mongoose.Schema({
    actor: { type: String, required: true }
})


const movieSchema = new mongoose.Schema({
    movieImg: { type: String, required: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    actors: [ actorSchema ],
    runningTime: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: String, required: true },
    releaseYear: { type: Number, required: true},
})


// Model
const Movie = mongoose.model("Movie", movieSchema)


// Export
module.exports = Movie
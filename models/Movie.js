// Imports
const mongoose = require("mongoose")


// Schema
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    actors: { type: String, required: true },
    runningTime: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: String, required: true },
    releaseYear: { type: Number, required: true},
})


// Model
const Movie = mongoose.model("Movie", movieSchema)


// Export
module.exports = Movie
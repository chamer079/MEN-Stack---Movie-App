// Imports
const mongoose = require("mongoose")


// Schema
const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true},
    user: { type: String, required: true },
})


const movieSchema = new mongoose.Schema({
    movieImg: { type: String, required: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    actors: { type: String, required: true },
    runningTime: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: String, required: true },
    releaseYear: { type: Number, required: true},
    comments: [ commentSchema ],
})


// Model
const Movie = mongoose.model("Movie", movieSchema)


// Export
module.exports = Movie
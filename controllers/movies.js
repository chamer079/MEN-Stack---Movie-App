// Import
const Movie = require("../models/Movie")


// Routes
    // Movie Index - GET - /movies
const getAllMovies = async (req, res) => {
    try{
        const allMovies = await Movie.find()
        // res.send("Movie Index Page")
        res.render("movies/index", { movies: allMovies })
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}

    // Show Movie - GET - /movies/:id
// const showMovie = async (req, res) => {
//     try{
//         const foundMovie = await Movie.findById(req.params.id)
//         const contextData = { movie: foundMovie}
//         res.send("Show Specific Movie Page")
//     } catch(err){
//         console.log(err)
//         res.redirect("/")
//     }
// }

    // New Movie - GET - /movies/new
const createMovie = async (req, res) => {
    // res.send("Create a Movie Page - Need to Build Out a Form")
    res.render("movies/new")
}

    // Post Movie - POST - /movies
const postMovie = async (req, res) => {
    try{
        await Movie.create(req.body)
        res.redirect("/movies")
    } catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

// Export
module.exports = {
    getAllMovies, 
    // showMovie,
    createMovie,
    postMovie
}



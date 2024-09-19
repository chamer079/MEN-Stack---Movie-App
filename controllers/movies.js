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

    // New Movie - GET - /movies/new
const createMovie = async (req, res) => {
// res.send("Create a Movie Page - Need to Build Out a Form")
res.render("movies/new")
}

    // Show Movie - GET - /movies/:id
const showMovie = async (req, res) => {
    try{
        const foundMovie = await Movie.findById(req.params.id)
        const contextData = { movie: foundMovie}
        res.render("movies/show", contextData)
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
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

    // Delete Movie - DELETE - /movies/:id
const deleteMovie = async (req, res) => {
    try{
        await Movie.findByIdAndDelete(req.params.id)
        console.log("Response from DB after deletion:", deleteMovie)
    } catch(err){
        console.log(err)
        res.redirect("/movies")
    }
}

    // Edit Movie - GET - /movies/:id
const editMovie = async (req, res) => {
    try{
        const movieToEdit = await Movie.findById(req.params.id)
        console.log(req.params.id)
        res.send("movies/edit", { movie: movieToEdit })
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}

    // Upodate a Movie - PUT - /movies/:id
const updateMovie = async (req, res) => {
    try{
        console.log("UPDATE - testing data from form:", req.body)
        await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    } catch(err){
        console.log(err)
        res.redirect(`/movies/${req.params.id}`)
    }
}

// Export
module.exports = {
    getAllMovies, 
    showMovie,
    createMovie,
    postMovie,
    deleteMovie, 
    editMovie, 
    updateMovie
}



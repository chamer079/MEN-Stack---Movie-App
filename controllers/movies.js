// Import
const Movie = require("../models/Movie")


// Routes
    // Movie Index
const getAllMovies = async (req, res) => {
    try{
        const allMovies = await Movie.find()
        res.send("Movie Index Page")
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}


// Export




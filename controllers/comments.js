const Movie = require("../models/Movie")

// Comment Routes
    // Post a Comment - POST - /movies/:id/
    const postComment = async (req,res) => {
        try{
            const foundMovie = await Movie.findById(req.params.id)
            
            // modify the fiels that this is storing in subDoc
            foundMovie.comments.push(req.body)
    
            // save -> instruct mongoose to validate the update data & write the update to the fruits collection
            await foundMovie.save()
            console.log(req.body)
            // redirect to a new location
            res.redirect(`/movies/${req.params.id}`)
        } catch(err){
            console.log(err)
            res.redirect(`/movies/${req.params.id}`)
        }
    }



module.exports = {
    postComment,
}
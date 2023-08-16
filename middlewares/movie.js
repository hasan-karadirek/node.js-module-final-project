const movies=require("../data/moviesData")
const CustomError=require("../helpers/CustomError")
const isMovieExist=(req,res,next)=>{
    const {id}=req.params
    if(!id){
        return next(new CustomError("Please provide an movie ID in your request parameters.",400))
    }
    for(movie of movies){
        if(movie.id===id){
            return next()
        }
    }
    return next(new CustomError(`The movie with id ${id} not found in the database.`,400))
}


module.exports={isMovieExist}
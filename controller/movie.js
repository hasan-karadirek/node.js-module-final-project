const movies=require("../data/moviesData")
const { createUniqueMovieId } = require("../helpers/movie")


const getAllMovies=(req,res,next)=>{
    return res.status(200).json({
        success:true,
        movies:movies
    })
    
}
const addMovie=(req,res,next)=>{
    const movie=req.body
    movie.id=createUniqueMovieId()
    movies.push(movie)

    return res.status(200).json({
        success:true,
        movie:movie
    })
}
const getSingleMovie=(req,res,next)=>{
    const {id}=req.params
    for(let movie of movies){
        if(movie.id===id){
            return res.status(200).json({
                success:true,
                movie:movie
            })
        }
    }
}

const deleteSingleMovie=(req,res,next)=>{
    const {id}=req.params
    for(movie of movies){
        if(movie.id===id){
            const indexOfMovie=movies.indexOf(movie)
            movies.splice(indexOfMovie,1)

            return res.status(200).json({
                success:true,
                movie:movie
            })
        }
    }
}






module.exports={getAllMovies,addMovie,getSingleMovie,deleteSingleMovie}
const movies=require("../data/moviesData")

const createUniqueMovieId=()=>{
    const movieIds=movies.map((movie)=> movie.id)
    let newId=Math.floor(Math.random() * 10000)
    if(!movieIds.includes(newId)){
    return newId
    }
    createUniqueMovieId()
}

module.exports={createUniqueMovieId}
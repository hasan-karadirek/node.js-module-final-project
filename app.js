const express=require("express")
const {getAllMovies,addMovie,getSingleMovie,deleteSingleMovie}=require("./controller/movie")
const {isMovieExist}=require("./middlewares/movie")
const {addMovieValidator}=require("./middlewares/requestValidator")
const customErrorHandler = require("./middlewares/customErrorHandler")



const app=express()
const port=3001

//express JSON middleware
app.use(express.json())

//CustomErrorHandler middleware when we pass an error in next() parameter, This middleware will work
app.use(customErrorHandler)

app.get("/",getAllMovies)

app.post("/movie",addMovieValidator,addMovie)

app.get("/movie/:id",isMovieExist,getSingleMovie)

app.delete("/movie/:id",isMovieExist,deleteSingleMovie)











app.listen(port,()=>console.log(`Server started on port: ${port}`))

module.exports=app
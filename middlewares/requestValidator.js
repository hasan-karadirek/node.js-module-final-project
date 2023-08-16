const CustomError=require("../helpers/CustomError")

const addMovieValidator=(req,res,next)=>{
    const {title,director,realese_date}=req.body;
    
    if(Object.keys(req.body).length!==3 || !title ||!director || !realese_date){
        return next(new CustomError("Please provide only 'title','director' and 'realese_date' properties in your request.body",400))
    }
    return next()
    
}

module.exports={addMovieValidator}
const customErrorHandler=(err,req,res,next)=>{

    return res.status(err.status || 500).json({
        success:false,
        message:err.name +": "+err.message || "Internal Server Error"
    })

}

module.exports=customErrorHandler
class APIError extends Error {
    constructor (
        statusCode,
        message = "something went wrong",
        errors =[],
        stack = "" //error stack
    ){
        super(message) //message ko over-ride karna hi karna hai
        this.statusCode=statusCode
        this.data = null 
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
        
    }
}
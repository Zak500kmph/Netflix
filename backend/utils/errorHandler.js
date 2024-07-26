class apiError extends Error{
    constructor(
        message="Unknown error has occured",
        statusCode

    ){
        super(message)
        this.message=message
        this.statusCode=statusCode
    }
}
export {apiError}
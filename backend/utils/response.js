class apiResponse{
    constructor(
        message,
        data,
        statusCode
    ){
      this.message=message,
      this.data=data
      this.code=statusCode
    }
}
    
export {apiResponse}

export default class response {
  static sendJsonResponse(res, success = false, statusCode, message, props) {
    return res.status(statusCode).send({
      success,
      statusCode,
      message,
      ...props,
    });
  }
  static sendErrorResponse(res, error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error?.message,
      console: console.log(error.message),
    });
  }
}

function errorHandler(err, req, res, next) {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const code = err.code || "INTERNAL_ERROR"

    res.status(statusCode).json({
        success: false,
        message,
        code
    })
}

module.exports = errorHandler;
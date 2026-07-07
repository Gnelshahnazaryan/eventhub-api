const HTTP_STATUS = require("../constants/http-status.constants.js");
const ERROR_CODES = require("../constants/error-codes.constants.js");

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";
    const code = err.code || ERROR_CODES.INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
        success: false,
        message,
        code,
    });
}

module.exports = errorHandler;

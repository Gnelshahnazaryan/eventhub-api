const AppError = require("../utils/AppError.js");
const HTTP_STATUS = require("../constants/http-status.constants.js");

function validate(schema) {
    return function (req, res, next) {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return next(
                new AppError("Validation Error", HTTP_STATUS.BAD_REQUEST, "VALIDATION_ERROR")
            );
        }

        req.body = result.data;
        next();
    };
}

module.exports = validate;

const { StatusCodes } = require('http-status-codes');

/**
 * @description used as root ivalid input error.
 * It is used to identify errors and send proper response via error handler
 */
module.exports = class InvalidInputError extends Error {
  statusCode

  constructor(message) {
    super(message);

    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

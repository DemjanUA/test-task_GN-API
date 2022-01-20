const { StatusCodes } = require('http-status-codes');

/**
 * @description used as root not found error.
 * It is used to identify errors and send proper response via error handler
 */
module.exports = class NotFoundError extends Error {
  statusCode

  constructor(message) {
    super(message);

    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

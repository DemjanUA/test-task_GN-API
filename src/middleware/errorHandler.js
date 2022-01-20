const { ReasonPhrases, StatusCodes } = require('http-status-codes');

const NotFoundError = require('../errors/NotFoundError');
const InvalidInputError = require( '../errors/InvalidInputError');
const logger = require('../utils/logger');

module.exports = function errorHandler(err, req, res, next) {
  if (err instanceof InvalidInputError) {
    logger.info({ error: err.constructor.name, path: req.path, message: err.message });
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: err.message,
    });
  }
  if (err instanceof NotFoundError) {
    logger.info({ error: err.constructor.name, path: req.path, message: err.message });
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  if (err instanceof Error) {
    logger.error({ error: err.constructor.name, path: req.path, message: err.message });
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }

  next();
}

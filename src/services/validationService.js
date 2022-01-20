const InvalidInputError = require("../errors/InvalidInputError");

class ValidationService {

  async validateGNInput(input) {
    if (!Number.isInteger(parseFloat(input))) throw new InvalidInputError('Invalid input type')
  }
}

module.exports = new ValidationService();
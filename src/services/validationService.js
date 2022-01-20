const InvalidInputError = require("../errors/InvalidInputError");

class ValidationService {
  fileResource

  async validateGNInput(input) {
    if (!Number.isInteger(parseFloat(input))) throw new InvalidInputError('Invalid input type')
  }
}

const validationService = new ValidationService();

module.exports = validationService;
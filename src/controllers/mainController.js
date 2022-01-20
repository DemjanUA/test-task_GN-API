const validationService = require('../services/validationService');
const GNService = require('../services/GNService');

class MainController {
  async get(req, res, next) {
    try {
      const value = req.query.value;

      await validationService.validateGNInput(value);

      let responseValue = await GNService.getGN(value);

      res.json({
        value: responseValue
      });
    } catch (err) {
      return next(err)
    }
  }
}

const mainController = new MainController();

module.exports = mainController;
const validationService = require('../src/services/validationService');

describe('validationService[validateGNInput] method', () => {
  it('should not throw an error if input is zero', async  () => {
    expect(async () => await validationService.validateGNInput(0)).not.toThrow()
  })

  it('should not throw an error if input valid integer', async  () => {
    const integer = 22;
    expect(async () => await validationService.validateGNInput(integer)).not.toThrow()
  })

  it('should throw an error if input is empty', async () => {
    expect(async () => await validationService.validateGNInput()).rejects.toThrow()
  })

  it('should throw an error if input is not number', async () => {
    expect(async () => await validationService.validateGNInput(null)).rejects.toThrow()
  })

  it('should throw an error if input is not integer number', async () => {
    expect(async () => await validationService.validateGNInput(53.31)).rejects.toThrow()
  })
})
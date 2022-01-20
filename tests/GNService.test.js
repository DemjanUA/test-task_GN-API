const GNService = require('../src/services/GNService');

describe('GNService[getGn] method', () => {
  it('should return "G" If the integer is a multiple of 3', async  () => {
    expect(await GNService.getGN(21)).toBe("G")
  })

  it('should return "N" If the integer is a multiple of 5', async () => {
    expect(await GNService.getGN(25)).toBe("N")
  })

  it('should return "GN" If the integer is a multiple of both 3 and 5', async () => {
    expect(await GNService.getGN(60)).toBe("GN")
  })

  it('should return "GN" If the integer is zero', async () => {
    const integer = 0;
    expect(await GNService.getGN(integer)).toBe("GN")
  })
  
  it('should return provided integer If the integer is not a multiple either 3 or 5', async () => {
    const integer = 22;
    expect(await GNService.getGN(integer)).toBe(integer)
  })
})
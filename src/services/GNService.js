class GNService {
  fileResource

  async getGN(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return "GN"
    } else if (value % 3 === 0) {
      return "G"
    } else if (value % 5 === 0) {
      return "N"
    }
  }
}

module.exports = new GNService();
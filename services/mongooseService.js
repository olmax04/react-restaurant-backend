class MongooseService {
  constructor(mongoose, connection) {
    this.mongoose = mongoose;
    this.connection = connection;
  }

  async main() {
    await this.mongoose.connect(`${this.connection}`);
  }
}

module.exports = MongooseService;

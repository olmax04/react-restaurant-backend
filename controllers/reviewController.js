const reviewModel = require("../models/reviewModel");
class ReviewController {
  constructor() {}

  async create(params) {
    let review = await reviewModel.create({
      name: params.name,
      phone: params.phone,
      content: params.content,
      tableNum: params.tableNum,
      clientId: params.clientId,
    });
    return review;
  }
}

module.exports = ReviewController;

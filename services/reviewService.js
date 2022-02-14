const ReviewController = require("../controllers/reviewController");

class ReviewService {
  constructor() {
    this.reviewController = new ReviewController();
  }
  async create(req, res) {
    let result = await this.reviewController.create({
      name: req.query.name,
      phone: req.query.phone,
      content: req.query.content,
      tableNum: req.query.table,
      clientId: req.query.clientId,
    });
    return res.json(result);
  }
}

module.exports = ReviewService;

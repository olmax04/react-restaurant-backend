const ReviewController = require("../controllers/reviewController");

class ReviewService {
  constructor() {
    this.reviewController = new ReviewController();
  }
  async create(req, res) {
    let result = await this.reviewController.create({
      name: req.body.name,
      phone: req.body.phone,
      content: req.body.content,
      tableNum: req.body.table,
      clientId: req.body.clientId,
    });
    return res.json(result);
  }
}

module.exports = ReviewService;

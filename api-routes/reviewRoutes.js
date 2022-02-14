const ReviewService = require("../services/reviewService");

class ReviewRoutes extends ReviewService {
  constructor(app) {
    super();
    this.app = app;
  }

  reviewNegative() {
    return this.app.post("/review/negative", (req, res) => {
      super.create(req, res);
    });
  }
}

module.exports = ReviewRoutes;

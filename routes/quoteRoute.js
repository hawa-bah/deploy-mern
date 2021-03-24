const mongoose = require("mongoose");
const Quote = mongoose.model("quotes");

module.exports = (app) => {
  app.get(`/quotes/get`, async (req, res) => {
    try {
      const quotes = await Quote.find({});
      return res.send(quotes);
    } catch (error) {
      return res.send(error);
    }
  });
};

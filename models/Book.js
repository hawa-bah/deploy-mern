const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  titles: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  published_date: {
    type: Date,
    required: true
  },
  credibity_rating: {
    type: Number,
    required: true
  },
  SE_method: {
    type: String
  },
  reasearch_method: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);
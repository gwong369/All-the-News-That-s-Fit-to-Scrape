'use strict';

const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// create Schema class
const Schema = mongoose.Schema;

// create article schema
const ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    unique: true,
    required: true
  },
  // saved is a boolean, default false
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  // deleted is a boolean, deafault false
  deleted: {
    type: Boolean,
    required: true,
    default: false
  },
  // date is set when added to database
  date: {
    type: Date,
    default: Date.now
  }
});

// add unique-validator plugin
ArticleSchema.plugin(uniqueValidator);

// create the Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;

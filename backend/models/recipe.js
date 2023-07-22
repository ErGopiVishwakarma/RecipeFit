const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    time: {
        type: String
    },
    description: {
      type: String,
    },
    ingredients: {
        type: [{
            ingredient: {
                type: String
            },
            unit: {
                type: String
            },
            quantity: {
                type: mongoose.Schema.Types.Mixed
            }
        }]
    },
    directions: {
      type: [String],
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    versionKey: false,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;

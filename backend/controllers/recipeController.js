const Recipe = require("../models/recipe");
const User = require("../models/user");

// ------------------------------------------- CREATE RECIPE ---------------------------------------------------
module.exports.createRecipe = async (req, res) => {
  try {
    const {
      title,
      category,
      img,
      images,
      time,
      description,
      ingredients,
      directions,
      user,
    } = req.body;

    const validUser = await User.findById(user);

    if (!validUser) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    const recipe = await Recipe.create({
      title,
      category,
      img,
      time,
      images,
      description,
      ingredients,
      directions,
      user,
    });

    validUser.recipes.push(recipe._id);
    await validUser.save();

    res
      .status(201)
      .send({ message: "Recipe created successfully", recipe: recipe });
  } catch (err) {
    res.status(500).send({ error: "Failed to create recipe" });
  }
};

// ------------------------------------------- FETCH ALL RECIPES ---------------------------------------------------
module.exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch recipes" });
  }
};

// ------------------------------------------- FETCH RECIPE BY ID ---------------------------------------------------
module.exports.getRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      res.status(404).send({ error: "Recipe not found" });
      return;
    }

    res.status(200).send(recipe);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch recipe" });
  }
};

// ------------------------------------------- UPDATE RECIPE ---------------------------------------------------
module.exports.updateRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {
      new: true,
    });

    if (!updatedRecipe) {
      res.status(404).send({ error: "Recipe not found" });
    }

    res
      .status(200)
      .send({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (err) {
    res.status(500).send({ error: "Failed to update recipe" });
  }
};

// ------------------------------------------- DELETE RECIPE ---------------------------------------------------
module.exports.deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;

    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

    if (!deletedRecipe) {
      res.status(404).send({ error: "Recipe not found" });
      return;
    }

    res.send({ message: "Recipe deleted successfully", recipe: deletedRecipe });
  } catch (err) {
    res.status(500).send({ error: "Failed to delete recipe" });
  }
};

// ---------------------------------- FETCH RECIPES BY SEARCH TERM AND FILTERS -----------------------------------------
module.exports.fetchRecipesBySearchTerm = async (req, res) => {
  try {
    const { userId } = req.params;

    // const query = await Recipe.find({user: userId});

        let query = {};

        // query.user = userId;

    if (req.query.title) {
      query.title = { $regex: req.query.title, $options: "i" };
    }

        if(req.query.time){
            query.time = { $in: ["10 mins", "15 mins", "20 mins", "25 mins", "30 mins", "35 mins", "40 mins", "60 mins"] }
        }

    if (req.query.categories.length > 0) {
      query.categories = {
        $in: [
          "main",
          "dessert",
          "breakfast",
          "salad",
          "snack",
          "sandwiches",
          "soup",
          "drink",
          "appetizer",
          "smoothie",
          "side",
          "spread",
          "homemade staple",
        ],
      };
    }

    if (req.query.ingredients.length > 0) {
      query.ingredients = {
        $in: [
          "alfalfa sprouts",
          "all-purpose flour",
          "almonds",
          "apple",
          "apricot",
          "artichoke",
          "arugula",
          "asparagus",
          "avocado",
          "banana",
          "beans",
          "beet",
          "bell pepper",
          "berries",
          "Blackberries",
          "blueberries",
          "bok choy",
          "bread",
          "broccoli",
          "Brussels sprouts",
          "cabbage",
          "Capers",
          "carrots",
          "cashews",
          "cauliflower",
          "celeriac",
          "celery",
          "cherry",
          "chia seeds",
          "chickpea",
          "chili pepper",
          "chocolate",
          "cilantro",
          "coconut",
          "coffee",
          "corn",
          "cranberries",
          "cucumber",
          "dates",
          "Dragon fruit",
          "edamame",
          "eggplant",
          "endive",
          "fennel",
          "fig",
          "flaxseeds",
          "fresh basil",
          "fresh chives",
          "fresh curry leaves",
          "fresh dill",
          "fresh fenugreek",
          "fresh mint",
          "fresh parsley",
          "fresh rosemary",
          "fresh sage",
          "fresh tarragon",
          "fresh thyme",
          "garlic",
          "ginger",
          "goji berries",
          "grapefruit",
          "grapes",
          "hazelnuts",
          "hemp seeds",
          "honeydew melon",
          "hummus",
          "jack fruit",
          "kale",
          "kiwi",
          "Kohlrabi",
          "leek",
          "lemon",
          "lemongrass",
          "lentils",
          "lettuce",
          "lime",
          "lychee",
          "mango",
          "mushrooms",
          "mustard greens",
          "nectarine",
          "oats",
          "oil",
          "olives",
          "onion",
          "orange",
          "Passion fruit",
          "pasta",
          "peaches",
          "peanuts",
          "pear",
          "peas",
          "pecans",
          "persimmon",
          "pickle",
          "pineapple",
          "pine nuts",
          "pistachios",
          "plantain",
          "plant cheese",
          "plant milk",
          "plant yogurt",
          "pomegranate",
          "potato",
          "pumpkin",
          "pumpkin seeds",
          "quinoa",
          "radish",
          "raisins",
          "raspberries",
          "rhubarb",
          "rice",
          "sesame seed",
          "shallot",
          "spinach",
          "squash",
          "squash seeds",
          "strawberries",
          "sugar",
          "sunflower seeds",
          "sweet potato",
          "tahini",
          "tea",
          "tempeh",
          "tofu",
          "tomato",
          "vegan butter",
          "vinegar",
          "walnuts",
          "watermelon",
          "zucchini",
        ],
      };
    }

    await Recipe.find(query)
      .exec()
      .then((recipes) => {
        console.log(recipes);
      })
      .catch((err) => {
        console.log(err);
      });

    // res.status(200).send();
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch the recipes" });
  }
};

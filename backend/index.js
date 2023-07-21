const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

require('dotenv').config();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(() => {
            console.log("Could'nt connect to MongoDB")
        });

app.use("/users", userRoutes);
app.use("/recipes", recipeRoutes);


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
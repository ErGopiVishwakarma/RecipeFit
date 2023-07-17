import React from "react";
import { Routes, Route } from "react-router-dom";

// ****************** Pages ********************
import PrivateRoute from "../Routes/PrivateRoute";
import HomePage from "../Pages/HomePage";
import ArticlesPage from "../Pages/ArticlesPage";
import RecipesPage from "../Pages/RecipesPage";
import SingleRecipePage from "../Pages/SingleRecipePage";
import NotFoundPage from "../Pages/NotFoundPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:recipeID" element={<SingleRecipePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;
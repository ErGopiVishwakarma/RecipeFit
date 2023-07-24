import React from "react";
import { Routes, Route } from "react-router-dom";

// ****************** Pages ********************
import PrivateRoute from "../Routes/PrivateRoute";
import HomePage from "../Pages/HomePage";
import ArticlesPage from "../Pages/ArticlesPage";
import RecipesPage from "../Pages/RecipesPage";
import SingleRecipePage from "../Pages/SingleRecipePage";
import NotFoundPage from "../Pages/NotFoundPage";
import FeedbackPage from "../Pages/FeedbackPage";
import About from "../Pages/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:id" element={<ArticlesPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipe/:recipeID" element={<SingleRecipePage />} />
      <Route path="/feedback" element={<FeedbackPage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;

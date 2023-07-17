import React, { useEffect } from "react";

const SingleRecipePage = () => {
  useEffect(() => {
    document.title = "Single Recipe | RecipeSnap";
  }, []);

  return <div>SingleRecipePage</div>;
};

export default SingleRecipePage;

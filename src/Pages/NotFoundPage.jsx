import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | RecipeSnap";
  }, []);

  return <div>PAGE NOT FOUND</div>;
};

export default NotFoundPage;

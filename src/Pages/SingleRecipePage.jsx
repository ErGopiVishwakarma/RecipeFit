import * as css from "../Styles/SingleRecipePageCss";
import * as c from "../Styles/SuggestedAndCommentCss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Input,
  Button,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

import TempRecipeData from "../Functions/TempData";
import SingleRecipeDetails from "../Components/RecipesPage/SingleRecipeDetails";
import IngAndDirect from "../Components/RecipesPage/IngAndDirect";
import SuggestedRecipes from "../Components/RecipesPage/SuggestedRecipes";

const SingleRecipePage = () => {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState(TempRecipeData);
  const [recipeData, setRecipeData] = useState({});
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    filterRecipe();
  }, []);

  useEffect(() => {
    document.title = `${recipeData.title} | RecipeSnap`;
    let ar = [];
    for (let a = 0; a < 10; a++) {
      suggested.push(recipeData.images);
    }
    setSuggested((prev) => ar);
    //console.log(suggested);
  }, [recipeData]);

  function filterRecipe() {
    let found = recipes?.filter((item, ind) => item._id == recipeID);
    setRecipeData((prev) => found[0]);
  }

  return (
    <Box
      paddingBottom={["65px", "80px", "90px"]}
      paddingTop={["95px", "110px", "125px"]}
      //paddingTop={["65px", "75px", "85px"]}
    >
      {/* Recipe Details */}
      <SingleRecipeDetails recipeData={recipeData} />

      {/* Ingredients and Direction and Images */}
      <IngAndDirect recipeData={recipeData} />

      {/* Suggested Recipes */}
      {/* <SuggestedRecipes recipeData={recipeData} suggested={suggested} /> */}

      {/* Discussion & Rating */}
      <Box css={c.CommentOuter}>
        <form>
          <Text css={c.CommentHeader} fontFamily="cotorisb">
            Discussion & Rating
          </Text>
          <textarea
            className="commentTextArea"
            type="text"
            placeholder="Leave your comment here!"
          />
          <Box css={c.InputCont}>
            <Input
              _focusVisible="false"
              color="dgreen"
              borderColor="lblack2"
              css={c.InputCss}
              _placeholder={{ fontFamily: "cotorisb" }}
              type="text"
              placeholder="Name (shown with your comment)"
            />
            <Input
              css={c.InputCss}
              _focusVisible="false"
              color="dgreen"
              borderColor="lblack2"
              _placeholder={{ fontFamily: "cotorisb" }}
              type="email"
              placeholder="Email (used only to notify you of replies)"
            />
          </Box>
          <Button
            type="submit"
            isLoading={false}
            css={c.SubmitBtn}
            // spinner={<h1>xfvg</h1>}
            loadingText="Submitting"
            spinnerPlacement="end"
            bg="greenbtn"
            fontFamily="hind"
            _hover={{ bg: "greenbtnhover" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SingleRecipePage;

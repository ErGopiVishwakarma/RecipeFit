import * as css from "../Styles/SingleRecipePageCss";
import * as c from "../Styles/SuggestedAndCommentCss";
import React, { useEffect, useState, useReducer, useContext } from "react";
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
import { LoadingImage } from "../Components/RecipesPage/LoadingComponent";
import { Context } from "../Redux/Context";
import { getSingle } from "../Redux/Recipes/action";

const init = {
  recipeData: {},
  isLoading: false,
  isError: false,
};

const singleReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "getSingle": {
      return {
        ...state,
        isLoading: false,
        recipeData: payload,
      };
    }
    case "singleLoading": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "singleError": {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const SingleRecipePage = () => {
  const { recipeID } = useParams();
  const { recipes } = useContext(Context);
  const [state, action] = useReducer(singleReducer, init);
  const { recipeData, isLoading, isError } = state;

  const [suggested, setSuggested] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    getSingle(action, recipeID);
  }, []);

  useEffect(() => {
    document.title = recipeData.title
      ? `${recipeData?.title} | RecipeSnap`
      : "Recipes | RecipesSnap";
  }, [recipeData]);

  return isLoading ? (
    <LoadingImage />
  ) : (
    <Box
      paddingBottom={["65px", "80px", "90px"]}
      paddingTop={["95px", "110px", "125px"]}
      //paddingTop={["65px", "75px", "85px"]}
    >
      {/* Recipe Details */}
      <SingleRecipeDetails qty={qty} setQty={setQty} recipeData={recipeData} />

      {/* Ingredients and Direction and Images */}
      <IngAndDirect qty={qty} recipeData={recipeData} />

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

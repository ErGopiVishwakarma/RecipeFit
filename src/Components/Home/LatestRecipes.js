import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import * as css from "../../Styles/AllRecipesBoxCss";
import React, { useEffect } from "react";
import { latestRecipes } from "./Dummy.js";
import RecipeCarousal from "../carousal/RecipeCarousal.js";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../Redux/Articles/action";

const LatestRecipes = () => {
  const [recipes,setRecipes] = useState([])

   const getRecipes = ()=>{
    axios.get('https://recipe-snap.onrender.com/recipes').then(res=>{
        setRecipes(res.data.recipes)
    }).catch(err=>console.log(err))
}

useEffect(()=>{
  getRecipes()
},[])

  return (
    <Flex direction={"column"} alignItems={"start"} px="4%" w="100%">
      <Heading py="30px" color={"gray"} fontFamily="cotorisb">
        Latest Recipe
      </Heading>
      <Grid
        gridTemplateColumns={[
          "",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        display={["none", "grid", "grid", "grid"]}
        w="100%"
        gap="30px"
      >
        {recipes?.slice(0, 8).map((el, ind) => {
          return (
            <NavLink to={`recipe/${el?._id}`} className="RecipeCardOuter">
              <Box css={css.RecipeCardImgBox}>
                <Image src={el?.img} css={css.RecipeCardImg} />
              </Box>
              <Text css={css.RecipeNameCss} fontFamily="cotorisb">
                {el?.title}
              </Text>
            </NavLink>
          );
        })}
      </Grid>
      <Button
        bg="red.700"
        fontFamily="hind"
        _hover={{ bg: "red.700", borderRadius: "50px" }}
        isLoading={false}
        m="auto"
        display={["none", "block"]}
        my="30px"
        color={"white"}
        w="auto"
      >
        more +
      </Button>
      {/* carousal here  */}
      <Box display={["block", "none"]} w="100%" pos={"relative"}>
        <RecipeCarousal arr={recipes} />
      </Box>
    </Flex>
  );
};

export default LatestRecipes;

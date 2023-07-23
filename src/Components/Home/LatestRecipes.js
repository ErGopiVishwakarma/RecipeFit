
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import * as css from "../../Styles/AllRecipesBoxCss";
import React from 'react'
import { latestRecipes } from './Dummy.js'
import RecipeCarousal from '../carousal/RecipeCarousal.js'
import { Link } from 'react-router-dom';

const LatestRecipes = () => {
  return (
    <Flex direction={'column'} alignItems={'start'} px='4%' w='100%'>
      <Heading py='30px' color={'gray'} fontFamily="cotorisb">Latest Recipe</Heading>
      <Grid gridTemplateColumns={['', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestRecipes?.map((el, ind) => {
            return (
              <Link className="RecipeCardOuter" target="_blank">
                <Box css={css.RecipeCardImgBox}>
                  <Image src={el.img} css={css.RecipeCardImg} />
                </Box>
                <Text css={css.RecipeNameCss} fontFamily="cotorisb">
                  {el.title}
                </Text>
              </Link>

            )
          })
        }
      </Grid>
      <Button 
        bg="red.700"
        fontFamily="hind"
        _hover={{ bg: "red.700",borderRadius:'50px' }}
        isLoading={false}
        m='auto'
        display={['none', 'block']}
        my='30px'
        color={'white'}
        w='auto'
      >
        more +
      </Button>
      {/* carousal here  */}
      <Box display={['block', 'none']} w='100%' pos={'relative'}>
        <RecipeCarousal arr={latestRecipes} />
      </Box>
    </Flex >
  );
};

export default LatestRecipes;

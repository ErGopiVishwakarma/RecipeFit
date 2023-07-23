
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import * as css from "../../Styles/AllRecipesBoxCss";
import * as cs from "../../Styles/FilterRecipeStyles";

import React from 'react'
import { latestArticles } from './Dummy'
import ArticleCarousal from '../carousal/ArticleCarousal'
import { Link } from 'react-router-dom';

const LatestArticles = () => {
  return (
    <Flex direction={'column'} alignItems={'start'} px='4%' w='100%'>
      <Heading py='30px' color={'gray'} fontFamily="cotorisb">Latest aritcles</Heading>
      <Grid gridTemplateColumns={['none', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestArticles?.map((el, ind) => {
            return (
              <Link className="RecipeCardOuter" target="_blank">
                <Box css={css.RecipeCardImgBox}>
                  <Image src={el.image} css={css.RecipeCardImg} />
                </Box>
                <Flex direction={'column'} gap='-10px'>
                  <Text fontSize={'1.4rem'} fontFamily="cotorisb">
                    {el.heading}
                  </Text>
                  <Text fontSize={'1.2rem'} fontFamily="cotorisb">
                    {el.subheading}
                  </Text>
                </Flex>
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
        <ArticleCarousal arr={latestArticles} />
      </Box>
    </Flex>
  )
}

export default LatestArticles;


import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import * as css from "../../Styles/AllRecipesBoxCss";
import * as cs from "../../Styles/FilterRecipeStyles";

import React, { useEffect, useState } from 'react'
import { latestArticles } from './Dummy'
import ArticleCarousal from '../carousal/ArticleCarousal'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const LatestArticles = () => {
  const [articles, setArticles] = useState([])
  const getArticles = ()=> {
    axios.get('https://recipefit-backend.onrender.com/articles').then(res => {
      setArticles(res.data.article)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <Flex direction={'column'} alignItems={'start'} px='4%' w='100%'>
      <Heading py='30px' color={'gray'} fontFamily="cotorisb">Latest aritcles</Heading>
      <Grid gridTemplateColumns={['none', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          articles?.map((el, ind) => {
            return (
              <NavLink to={`articles/${el._id}`} className="RecipeCardOuter" key={ind}>
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
              </NavLink>

            )
          })
        }
      </Grid>
      <Button
        bg="red.700"
        fontFamily="hind"
        _hover={{ bg: "red.700", borderRadius: '50px' }}
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
        <ArticleCarousal arr={articles} />
      </Box>
    </Flex>
  )
}

export default LatestArticles;

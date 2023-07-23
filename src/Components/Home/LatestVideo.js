
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import * as css from "../../Styles/AllRecipesBoxCss";
import React from 'react'
import { latestVideos } from './Dummy'
import VideoCarousal from '../carousal/VideoCarousal'
import { Link } from 'react-router-dom';


const LatestVideo = () => {
  return (
    <Flex direction={'column'} alignItems={'start'} w='100%' pb='30px' px='4%'>
      <Heading py='30px' color={'gray'} fontFamily="cotorisb">Latest videos</Heading>
      <Grid gridTemplateColumns={['none', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestVideos?.map((el, ind) => {
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
      <Button bg='red.700' colorScheme='white' m='auto' my='30px' display={['none', 'block']}>more +</Button>
      {/* carousal here  */}
      <Box display={['block', 'none']} w='100%' pos={'relative'}>
        <VideoCarousal arr={latestVideos} />
      </Box>
    </Flex>
  )
}


export default LatestVideo;


import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { latestRecipes } from './Dummy.js'
import RecipeCarousal from '../carousal/RecipeCarousal.js'

const LatestRecipes = () => {
  return (
    <Flex direction={'column'} alignItems={'start'}  px='4%' w='100%'>
      <Heading py='30px' color={'gray'}>Latest Recipe</Heading>
      <Grid gridTemplateColumns={['', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestRecipes?.map((el, ind) => {
            return (
              <Flex direction={'column'} borderRadius={'10px'} alignItems={'start'} gap='15px' >
                <Image src={el.img} borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
                <Text fontSize={'22px'} fontFamily={'hind'} color={'gray'}>{el.title}</Text>
              </Flex>
            )
          })
        }
      </Grid>
      <Button bg='red.700' colorScheme='white' m='auto' my='30px' display={['none','block']}>more +</Button>
      {/* carousal here  */}
      <Box display={['block','none']} w='100%' pos={'relative'}>
        <RecipeCarousal arr={latestRecipes} />
      </Box>
    </Flex>
  );
};

export default LatestRecipes;

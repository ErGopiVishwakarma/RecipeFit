
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'
import { latestArticles } from './Dummy'
import ArticleCarousal from '../carousal/ArticleCarousal'

const LatestArticles = () => {
  return (
    <Flex direction={'column'} alignItems={'start'} px='4%'  w='100%'>
      <Heading py='30px' color={'gray'}>Latest aritcles</Heading>
      <Grid gridTemplateColumns={['none', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestArticles?.map((el, ind) => {
            return (
              <Flex direction={'column'} borderRadius={'10px'} alignItems={'start'} gap='15px' >
                <Image src={el.image} borderRadius={'10px'} />
                <Flex direction={'column'} textAlign={'start'}>
                  <Heading fontSize={'22px'} color={'gray'}>{el.heading}</Heading>
                  <Text>{el.subheading}</Text>
                </Flex>
              </Flex>
            )
          })
        }
      </Grid>
      <Button bg='red.700' colorScheme='white' m='auto' my='30px' display={['none','block']}>more +</Button>
      {/* carousal here  */}
      <Box display={['block','none']} w='100%' pos={'relative'}>
        <ArticleCarousal arr={latestArticles}  />
      </Box>
    </Flex>
  )
}

export default LatestArticles;

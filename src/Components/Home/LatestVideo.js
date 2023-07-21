import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { latestVideos } from './Dummy'
import VideoCarousal from '../carousal/VideoCarousal'


const LatestVideo = () => {
  return (
    <Flex direction={'column'} alignItems={'start'} w='100%' pb='30px' px='4%'>
      <Heading py='30px' color={'gray'}>Latest videos</Heading>
      <Grid gridTemplateColumns={['none', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} display={['none', 'grid', 'grid', 'grid']} w='100%' gap='30px'>
        {
          latestVideos?.map((el, ind) => {
            return (
              <Flex direction={'column'} borderRadius={'10px'} alignItems={'start'} gap='15px' >
                <Image src={el.img} borderRadius={'10px'} />
                <Heading color={'gray'} fontSize={'22px'}>{el.title}</Heading>
              </Flex>
            )
          })
        }
      </Grid>
      <Button bg='red.700' colorScheme='white' m='auto' my='30px' display={['none','block']}>more +</Button>
      {/* carousal here  */}
      <Box display={['block','none']} w='100%' pos={'relative'}>
        <VideoCarousal arr={latestVideos} />
      </Box>
    </Flex>
  )
}

export default LatestVideo

import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { latestArticles } from './Dummy'

const LatestArticles = () => {
    return (
        <Flex direction={'column'} alignItems={'start'} px='50px' w='100%'>
            <Heading py='30px' color={'gray'}>Latest aritcles</Heading>
            <Grid gridTemplateColumns={'repeat(3,1fr)'} w='100%' gap='30px'>
            {
            latestArticles?.map((el,ind)=>{
              return (
                <Flex direction={'column'} borderRadius={'10px'} alignItems={'start'} gap='15px' >
                  <Image src={el.image} borderRadius={'10px'}  />
                  <Flex direction={'column'} alignItems={'start'}>
                  <Heading fontSize={'22px'} color={'gray'}>{el.heading}</Heading>
                  <Text>{el.subheading}</Text>
                  </Flex>
                </Flex>
              )
            })
          }
            </Grid>
        </Flex>
    )
}

export default LatestArticles;

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CommentMessage = () => {
  return (
    <Flex direction={'column'} textAlign={'start'} gap='10px'>
        <Box h='2px' bg='gray'></Box>
        <Flex direction={'column'} gap='15px'>
            <Heading fontFamily={'cotorisb'} fontSize={'25px'} color='dgreen'>Gopi vishwakarma</Heading>
            <Text>
            Thanks for this post. I struggled with an eating disorder for over 2 decades and although I can finally see my bright future on the other side, I was having a hard time tonight. But your post, with its gentleness, palpable care and patience, sparked a moment of clarity and real desire to commit even harder to caring for myself. I made one of your mug cakes and used some of the tools here to reflect on how I felt. It feels like the first step towards something really freeing.
            </Text>
            <Text bg='red.600' px='3px' borderRadius={'5px'} w='70px' textAlign={'center'} color='white' fontSize='13px'>Reply</Text>
        </Flex>
    </Flex>
  )
}

export default CommentMessage
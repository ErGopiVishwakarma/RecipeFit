import { EmailIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsFlower2, BsPinterest, BsTwitter } from 'react-icons/bs'

const TopPage = ({el}) => {
    return (
        <Flex direction={'column'} textAlign={'start'} borderLeft={'2px solid gray'} pl={['15px', '20px', '25px', '30px']} gap={['10px', '15px', '20px', '25px']} w='100%'>
            <Flex direction={'column'} gap={['5px', '10px', '12px', '15px']}>
                <Heading fontFamily="cotorisb" fontSize={['50px', '50px', '60px', '80px']}>{el.heading}</Heading>
                <Heading fontFamily="cotorisb" fontSize={['30px', '35px', '40px', '50px']}>{el.subheading}</Heading>
            </Flex>
            <Flex gap='10px' fontSize={'14px'}>
                <Text px='10px' py='1px' bg='red.600' color={'white'} borderRadius={'5px'}>9 min</Text>
                <Text px='10px' py='1px' bg='dgreen' color={'white'} borderRadius={'5px'}>Health & wellness</Text>
                <Text px='10px' py='1px' bg='dgreen' color={'white'} borderRadius={'5px'}>Nutrition</Text>
            </Flex>
            {/* social media from here to  */}
            <Flex py='40px' display={{base:'flex',lg:'none'}}>
                <Flex
                    justifyContent={'space-between'}
                    w="100%"
                    alignItems={'center'}>
                    <Box><BsFacebook fontSize={'22px'}   /></Box>
                    <BsPinterest fontSize={'22px'} />
                    <BsTwitter fontSize={'22px'} />
                    <EmailIcon fontSize={'22px'} />
                    <BsFlower2 color="red" fontSize={'22px'} />
                </Flex>
            </Flex>
            {/* till here  */}

            <Flex fontSize='17px' direction={{ base: 'column', lg: 'row' }} gap={['15px', '17px', '20px', '0px']}>
                <Box w={{ base: '100%', lg: '45%' }}>
                    <Text fontStyle={'italic'}>28 sep 2022</Text>
                </Box>
                <Box pr={['0px', '0px', '0px', '100px']}>
                    <Text fontStyle={'italic'}>
                        {el.desc}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default TopPage
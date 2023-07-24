import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SideImage = ({ el }) => {
    return (
        <Box fontFamily="cotorisb" >
            <Heading fontFamily="cotorisb" textAlign={'start'} pb='15px' fontSize={'40px'}>Articles</Heading>
            <Flex direction={'column'} gap='30px'>
                {/* first box  */}
                {
                    el?.map((ele, ind) => {
                        return <Flex direction={'column'} gap='15px' key={ele._id}>
                            <Image src={ele.image} borderRadius={'15px'} />
                            <Flex direction={'column'} textAlign={'start'}>
                                <Heading fontFamily="cotorisb" fontSize={'25px'}>{ele.heading}</Heading>
                                <Text fontSize={'18px'}>{ele.text}</Text>
                            </Flex>
                        </Flex>
                    })
                }
            </Flex>
        </Box>
    )
}

export default SideImage
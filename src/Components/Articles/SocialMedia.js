import { EmailIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsFlower2, BsPinterest, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <Flex pr="50px" pt="80px"  position={'sticky'} top='120px' pl='20px'>
            {/* social media links  */}
            <Flex
                direction={"column"}
                gap="30px"
                w="100%"
                alignItems={'center'}>
                <BsFacebook />
                <BsPinterest />
                <BsTwitter />
                <EmailIcon />
                <BsFlower2 color="red" />
            </Flex>
        </Flex>
    )
}

export default SocialMedia
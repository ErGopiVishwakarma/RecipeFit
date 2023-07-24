import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsTiktok, BsWifi, BsYoutube } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/Icons/favicon.png'

const Footer = () => {
    return (
        <Flex direction={'column'} px='4%' py='50px' gap='20px' bg={'gray.200'} mt='50px'>
            <Flex justifyContent={'space-between'} direction={['column','column','row']} alignItems={['center',]} gap={['20px','20px','none']}>
                <Flex gap={['40px','50px','30px','50px']}>
                    <BsYoutube color='gray' />
                    <BsInstagram color='gray' />
                    <BsFacebook color='gray' />
                    <BsPinterest color='gray' />
                    <BsTiktok color='gray' />
                    <BsWifi color='gray' />
                </Flex>
                <Box>
                <Image src={logo} w={['50px','60px','70px','80px']} />
                </Box>
                <Flex gap={['40px','50px','30px','50px']} textColor={'gray'}>
                    <NavLink>About</NavLink>
                    <NavLink>Privacy</NavLink>
                    <NavLink>Support</NavLink>
                    <NavLink>Team</NavLink>
                </Flex>
            </Flex>
            <Flex direction={'column'} alignItems={'center'} gap='20px'>
                <Text fontSize={'14px'} color={'gray'}>
                    © 2017 - 2023 pickuplimes.com
                </Text>
                <Text fontSize={'14px'} color={'gray'}>
                    kvk: 81111509
                </Text>
            </Flex>

        </Flex>
    )
}

export default Footer
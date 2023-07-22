import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsFlower2, BsMailbox, BsPinterest, BsTwitter, BsVoicemail } from "react-icons/bs";

const ArticlesPage = () => {
  return (
    <Box>
      <Box>
        <Image src='https://cdn.pickuplimes.com/cache/5b/e2/5be2286c25d8982a709240abfad2f378.jpg' w='100%' />
      </Box>
      <Flex px='4%'>
        <Flex pr='50px' py='80px' pos={'relative'} >
          {/* social media links  */}
          <Flex direction={'column'} gap='30px' w='100%'  alignItems={'center'} justifyContent={'center'}>
            <BsFacebook />
            <BsPinterest />
            <BsTwitter />
            <EmailIcon />
            <BsFlower2 color="red" />
          </Flex>
        </Flex>
       <Flex direction={'column'}>
       <Flex w='92%' bg='white' mt='-50px' p='50px' borderRadius={'10px'} direction={'column'} >
          <Flex direction={'column'} textAlign={'start'} borderLeft={'1px solid red'} pl='30px' gap='20px' w='100%'>
            <Flex direction={'column'} gap='20px'>
              <Heading>Food and Mood</Heading>
              <Heading>how can we feel better</Heading>
            </Flex>
            <Flex gap='10px'>
              <Text px='10px' bg='black' color={'white'}>main</Text>
              <Text px='10px' bg='black' color={'white'}>main</Text>
              <Text px='10px' bg='black' color={'white'}>main</Text>
            </Flex>
            <Flex >
              <Box w='40%'>
                <Text>28 sep 2022</Text>
              </Box>
              <Box > 
                <Text>
                  How we feel can influence what foods we eat, but what we eat also has the power to impact how we feel. In this article, we'll explore the basics of brain health, how nutrients impact our emotions, and tangible tips to help boost our mood.
                </Text>
              </Box>
            </Flex>
          </Flex>
         
        </Flex>
         {/* bottom part will come here  */}
        <Flex h='400px' border={'1px solid red'} w='100%'>

          </Flex>
       </Flex>
      </Flex>
    </Box>
  )
};

export default ArticlesPage;

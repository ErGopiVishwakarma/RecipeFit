import { Box, Button, Checkbox, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import * as css from "../../Styles/FilterRecipeStyles";

const JoinCommunity = () => {
  return (
    <Box w='100' bg='gray.200' py='40px' px='4%'>
      <Flex w={['100%', '100%', '100%', '70%']} m='auto' direction={'column'} alignItems={'start'}>
        <Heading>
          Join the Community!
        </Heading>
        <Flex w='100%' py='40px' gap={['60px','70px','80px','100px']} direction={['column', 'column', 'row', 'row']}>
          <Flex w={['70%', '80%', '50%']} gap='50px' m='auto'>
            <Box display={['none', 'block']}>
              <Text style={{ writingMode: 'vertical-lr' }} letterSpacing={'4px'} transform="rotate(180deg)">Get your jumpstart guide!</Text>
            </Box>
            <Box>
              <Image src='https://www.pickuplimes.com/static/images/jumpstart_guide.ea67430a3b52.jpg' />
            </Box>
          </Flex>
          <Flex w={['100%', '90%', '50%']} gap='30px' direction={'column'} m='auto' alignItems={'start'} textAlign={'start'} fontSize={'18px'}>
            <Text letterSpacing={'4px'}>Stay in the loop!</Text>
            <Text>Sign up for our Newsletter to stay up-to-date with everything Pick Up Limes.</Text>
            <Text>When you join, we will send the link to our plant-based jumpstart guide right to your inbox!</Text>
            <Flex direction={'column'} w='100%' gap='10px' >
              <Input bg='white' border='1px solid gray' w='100%' borderRadius={'none'} placeholder="email" pl='20px' _hover={{ border: '1px solid gray' }} />
              <Checkbox bg='white' w='17px' h='17px' />
            </Flex>
            <Button css={css.SubmitBtn}
              loadingText="Submitting"
              spinnerPlacement="end"
              bg="red.700"
              fontFamily="hind"
              _hover={{ bg: "red.700" }}
              isLoading={false}
              m='auto'
            >
              Sign up
            </Button>
          </Flex>

        </Flex>
      </Flex>
    </Box>
  );
};

export default JoinCommunity;

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import * as css from "../../Styles/FilterRecipeStyles";

const WelcomeFriends = () => {
    return (
        <Box w='100' bg='gray.200' py='40px' px={['3%', '4%', '5%', '4%']}>
            <Flex w={['100%', '100%', '100%', '70%']} m='auto' direction={'column'} alignItems={'start'}>
                <Heading>
                    Welcome friend
                </Heading>
                <Flex w='100%' py='40px' gap={['60px','70px','80px','100px']} direction={['column', 'column', 'row', 'row']}>
                    <Flex w={['70%', '80%', '50%']} gap='50px' m='auto'>
                        <Box display={['none', 'block']}>
                            <Text style={{ writingMode: 'vertical-lr' }} letterSpacing={'4px'} transform="rotate(180deg)">psst: we're happy you're here!</Text>
                        </Box>
                        <Box>
                            <Image src='https://www.pickuplimes.com/static/images/Intro_robin_sadia.9ef9bd5ff7fa.jpg' />
                        </Box>
                    </Flex>
                    <Flex w={['100%', '90%', '50%']} gap='40px' direction={'column'} m='auto' alignItems={'start'} textAlign={'start'} fontSize={'18px'}>
                        <Text letterSpacing={'4px'}>We are Pick Up Limes!</Text>
                        <Text>Our mission is to make a nourishing plant-based lifestyle accessible to everyone.</Text>
                        <Text>We make videos, recipes, and nutrition articles to make you feel excited and supported in introducing more plant-based foods into your meals, snacks, desserts, and everything in-between!</Text>
                        {/* <Button m='auto' bg='red.700' colorScheme='white'>learn more</Button> */}
                  
                            <Button css={css.SubmitBtn}
                                loadingText="Submitting"
                                spinnerPlacement="end"
                                bg="red.700"
                                fontFamily="hind"
                                _hover={{ bg: "red.700" }}
                                isLoading={false}
                                m='auto'
                            >
                                learn more +
                            </Button>
                       
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}


export default WelcomeFriends;

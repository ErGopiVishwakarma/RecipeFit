import { AspectRatio, Box, Center, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'


const FeedbackPage = () => {

    const googleFormEmbedURL = "https://docs.google.com/forms/d/e/1FAIpQLSe1MM3fa2nKZgwoR1fPPqsA5xVWyunAQSOZAJMkqvDKXGYhsA/viewform?usp=sf_link"
    // https://docs.google.com/forms/d/e/1FAIpQLSe1MM3fa2nKZgwoR1fPPqsA5xVWyunAQSOZAJMkqvDKXGYhsA/viewform?usp=sf_link

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      },[])

    return (
        <>
            <Box
                paddingTop={150}
                paddingBottom={150}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'50%'}
                    >
                        <Image
                            src='https://www.pickuplimes.com/static/images/feedback_meal_prep.040e54893269.jpg'
                            alt='feedback-banner-img'
                            borderRadius={10}
                            width={'90%'}
                        />
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Heading
                            size={'4xl'}
                            fontFamily={"cotorisb"}
                        >Your feedback is our fuel 🔥</Heading>
                        <Text
                            marginTop={"30px"}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            We strive to deliver the best content we can so that you can feel excited and supported in your food choices.
                            Help us to improve by sharing your unfiltered feedback in the form below.
                        </Text>
                    </Box>
                </Flex>
            </Box>


            <Box>
                <AspectRatio ratio={16/9}>
                    <iframe 
                        title='google form'
                        src={googleFormEmbedURL}
                        backgroundColor={"initial"}
                    />
                </AspectRatio>
            </Box>
        </>
    )
}

export default FeedbackPage
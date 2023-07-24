import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <div id="about-page"> fontFamily={"cotorisb"}
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
                        >Oh hey there!</Heading>
                        <Text
                            marginTop={"30px"}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            We are RecipeSnap and we have made it our mission to make a nourishing plant-based lifestyle accessible to everyone 😊
                        </Text>
                        <Text
                            marginTop={"30px"}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            Since you're here, you're probably curious to know more about us. So cozy up, grab a drink, and let's get chatting.
                        </Text>
                    </Box>
                </Flex>
            </Box>


            {/* --------------------------------  SECOND SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
                backgroundColor={"#EAEDE8"}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                             We are a team of 4 members and we started RecipeSnap sometime around 2014 when we were making the transition to a vegan lifestyle. We had just graduated from university, and were working as a dietitian at a local hospital in Vancouver, Canada. We started to post recipes as a hobby, and wasn't sharing what we made with anyone aside from our own families.
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_page_kitchen_2.856f4fa661c2.gif"
                            width={"100%"}
                            borderRadius={5}
                        />
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                        >
                            Circa 2014, Vancouver, Canada
                        </Text>
                    </Box>
                </Flex>
            </Box>



            {/* --------------------------------  THIRD SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_page_Thailand_001.6b4290bb9bf3.jpg"
                            width={"100%"}
                            borderRadius={5}
                        />
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                        >
                            January 2016, Tonsai Beach, Thailand
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            Less than a couple of years later, we embarked on a 6-month backpacking trip and travelled together for many weeks, from Thailand to Cambodia, to the Netherlands, Belgium, France, and Italy. Our bond grew so much. Crazy, eh?
                        </Text>
                    </Box>
                </Flex>
            </Box>




            {/* --------------------------------  FOURTH SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
                backgroundColor={"#F2EAE3"}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            Now living in a new country, and little to do in the way of work, we decided to take our hobbies of creating and sharing recipes a little bit more seriously.We would accompany each other, working away in the library all day building a new RecipeSnap website and brainstorming ideas for what would become the RecipeSnap YouTube channel.
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_page_library_001.22fa8108e0d2.jpg"
                            width={"100%"}
                            borderRadius={5}
                        />
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                        >
                            End of 2016, Eindhoven, The Netherlands
                        </Text>
                    </Box>
                </Flex>
            </Box>





            {/* --------------------------------  FIFTH SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_page_studio_001.83701640d882.jpg"
                            width={"100%"}
                            borderRadius={5}
                        />
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                        >
                            Mid 2018, RecipeSnap studio in-the-making
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            We posted my first YouTube video in January of 2017. After about 6 months, the channel blossomed and grew in a way we never imagined possible. In the summer of 2018 we moved our operations from our cozy 40 square meter apartment into a beautiful studio space where we could grow our team and continue to make recipes and film videos.
                        </Text>
                    </Box>
                </Flex>
            </Box>



            {/* -------------------------------- SIXTH SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
                backgroundColor={"#EAEDE8"}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            A full 4 years later, with our backgrounds in nutrition and engineering, we've created the new RecipeSnap website you see today! Through it, we hope we can offer you a calming, reassuring, and educational means of eating and enjoying more plants.
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_robin_code_001.9ebc99afc229.jpg"
                            width={"100%"}
                            borderRadius={5}
                        />
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                        >
                            Mid 2020, building this website
                        </Text>
                    </Box>
                </Flex>
            </Box>




            {/* -------------------------------- SEVENTH SECTION --------------------------------- */}
            <Box
                paddingTop={120}
                paddingBottom={120}
            >
                <Flex
                    direction={'row'}
                    width={'85%'}
                    margin={'auto'}
                    alignItems={'center'}
                >
                    <Box
                        width={'45%'}
                        textAlign={'left'}
                    >
                        <Image
                            src="https://www.pickuplimes.com/static/images/about/about_page_sadia_robin_kitchen.e56b05f7a9af.jpg"
                            width={"100%"}
                            borderRadius={5}
                        />
                    </Box>
                    <Spacer />
                    <Box
                        width={'45%'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                        >
                            Our aim at RecipeSnap is simple: to share resources on living a vibrant and uncomplicated life fuelled by plant-based foods, and to share simple vegan recipes that are nutritious, delicious, and visually appealing. We hope you enjoy the content we share in the form of recipes, articles, and videos, and we're so glad you're here with us. Welcome to the family!
                        </Text>
                        <Text
                            textAlign={'left'}
                            fontFamily={"hind"}
                            fontWeight={700}
                            marginTop={7}
                        >
                            With love,
                        </Text>
                        <Text
                            fontFamily={"cursive"}
                            fontSize={'3xl'}
                            textAlign={'left'}
                            marginTop={3}
                        >
                            RecipeSnap team
                        </Text>
                    </Box>
                </Flex>



                <Flex
                    width={"80%"}
                    margin={'auto'}
                    marginTop={"140px"}
                    gap={20}
                    fontFamily={"cotorisb"}
                    fontSize={'2xl'}
                >
                    <Box width={"25%"}>
                        <Image src="https://www.pickuplimes.com/static/images/about/Sadia.06ecb58114b4.jpg"  borderRadius={"50%"}  style={{transition: "transform 0.3s" }} _hover={{transform: "scaleX(-1)"}}/>
                        <Text marginTop={3}>Sadia</Text>
                    </Box>
                    <Box width={"25%"}>
                        <Image src="https://www.pickuplimes.com/static/images/about/Robin.dc3c9bb915c2.jpg"  borderRadius={"50%"}  style={{transition: "transform 0.3s" }} _hover={{transform: "scaleX(-1)"}}/>
                        <Text marginTop={3}>Robin</Text>
                    </Box>
                    <Box width={"25%"}>
                        <Image src="https://www.pickuplimes.com/static/images/about/Andrea.c9619d5606d6.jpg"  borderRadius={"50%"}  style={{transition: "transform 0.3s" }} _hover={{transform: "scaleX(-1)"}}/>
                        <Text marginTop={3}>Andrea</Text>
                    </Box>
                    <Box width={"25%"}>
                        <Image src="https://www.pickuplimes.com/static/images/about/Alex.fd14923713a0.jpg"  borderRadius={"50%"}  style={{transition: "transform 0.3s" }} _hover={{transform: "scaleX(-1)"}}/>
                        <Text marginTop={3}>Alex</Text>
                    </Box>
                </Flex>
            </Box>




            {/* -------------------------------- EIGHTH SECTION --------------------------------- */}
            <Box
                paddingTop={100}
                paddingBottom={120}
            >
                <Heading size={'4xl'} fontFamily={"cotorisb"}>FAQs</Heading>


                {/* ----------------------------------------  ACCORDION ---------------------------------------- */}
                <Accordion
                    allowMultiple
                    width={"70%"}
                    margin={'auto'}
                    marginTop={"70px"}
                    fontFamily={"hind"}
                >
                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            Do you have a grocery shopping list for me?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    Yes! &nbsp; We provide a free copy to everyone who signs up for our newsletters. Signing up to our newsletters is also free, and you can unsubscribe anytime.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            What are tips for anyone wanting to transition to eating more plant-based?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    Be kind to yourself, take it slow, and enjoy the process. Learn as much as you can, and tackle one new thing at a time so as to not overwhelm yourself. Start small. Consider starting to replace your cow's milk with oat, soy, or almond milk. Then consider swapping out dairy yogurt for plant-based yogurts. Luckily, there are many plant-based meat and dairy alternatives on the market. It can also help if you find plant-based versions of recipes you already enjoy. It also helps to think of all of the ingredients and delicious foods you are adding to meals and snacks, rather than focusing on what you are taking away. For more tips, check out our video on tips for beginners venturing into the world of veganism.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            How should I stock my pantry?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    We've made a video covering some of our pantry essentials. For ingredient essentials, consider visiting our PUL shop.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                           Is there a way to contact the RecipeSnap team?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    Surely, for feedback on how we can improve our service or for partnership inquiries, visit our contact page.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            How can I improve my food styling and food photography skills?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    For some of our favourite tips, consider watching our video on our food photography tips for beginners.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            Which supplements are recommended for vegans?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    We recommend taking vitamin B12, vitamin D, and possibly an algae omega-3 supplement. The dose and the amount you'd need depends on a few factors like age, gender, geographical location, season, diet, and lifestyle. Read our articles Vitamin B12, Vitamin D and omega-3 if you're interested to learn more. Note these recommendations do not substitute for the advice given by your doctor or dietitian.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            Does RecipeSnap offer personalized nutrition counseling or support?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    We don't, although if you require nutrition support, we highly recommend seeing a dietitian in your area who can work with you one-on-one.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>


                    <AccordionItem backgroundColor={"#EAEDE8"} p={3} borderRadius={10} margin={5}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign={'left'} fontSize={'xl'} fontWeight={700}>
                                            Is the RecipeSnap content only meant for those who are plant-based or vegan?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        ) : (
                                            <AddIcon fontSize='24px' border={"1px solid #9AB295"} borderRadius={"50%"} p={1} color={"#9AB295"} />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign={'left'} fontSize={'xl'} fontWeight={500}>
                                    Certainly not! The RecipeSnap tips and recipes can be enjoyed by all, regardless of dietary choices. At RecipeSnap, we do believe in the many health, environmental, and ethical benefits of following a plant-based lifestyle, but we would never pressure it on anyone. Ultimately, this is your decision. We hope that if you do choose to include more plants in your life, that our recipes and nutrition information help you feel more confident in doing so 😊
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                </Accordion>

            </Box>

        </div>
    )
}

export default About
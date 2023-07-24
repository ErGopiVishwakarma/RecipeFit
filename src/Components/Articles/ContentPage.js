import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ContentPage = ({el}) => {
 console.log(el)
    return (
        <Box>
            <Flex direction={'column'} gap='50px' >
                {/* first part  */}
                <Flex direction={'column'} textAlign={'start'} gap='30px'>
                    <Heading fontFamily="cotorisb" fontSize={'40px'}>The brain in brief</Heading>
                    <Text>
                        Our brain is a small yet complex organ that influences our emotions, and it needs nutrition to function at its finest. The brain processes the information it receives and sends messages throughout the body which can impact how we feel. Changes in mood are natural and help us navigate the ebbs and flows of life, but if we’re feeling down, irritable, or tired often, nourishment may be a controllable factor to enhance our well-being. A pathway called the vagus nerve is a particularly important connection between nutrition and how we feel. It acts as a two-way street to sense and send information to the brain, which impacts emotion-related chemicals our brain releases, and consequently how the body physically responds. What we eat has the power to influence these emotion-related chemicals, in addition to body processes like inflammation, stress, and gut health which can further influence what gets said between the body and the brain. Let's take a closer look.
                    </Text>
                </Flex>

                {/* second part here  */}
                <Flex direction={'column'} textAlign={'start'} gap='30px'>
                    <Heading fontFamily="cotorisb" fontSize={'40px'}>Neurotransmitter building blocks</Heading>
                    <Flex direction={'column'} gap='13px'>
                        <Text>
                            The brain releases chemicals called neurotransmitters which influence how we feel and many of them are made with protein. When we eat protein, it's broken down into smaller building blocks called amino acids, and our body uses these amino acids to build brain chemicals. For example, the amino acid tryptophan is used to make the neurotransmitter called serotonin, which is a mood-regulating hormone. Similarly, the amino acid tyrosine is used to make the neurotransmitter called dopamine, which is a hormone connected to feelings of motivation and pleasurable reward.
                        </Text>
                        <Box p='15px' bg='gray' borderRadius={'10px'}>
                            <Text>
                                <b>Serotonin</b> is a brain chemical made from tryptophan that plays a role in mood stabilization and contributes to feelings of happiness.
                            </Text>
                        </Box>
                        <Box p='15px' bg='gray' borderRadius={'10px'}>
                            <Text>
                                <b>Dopamine</b> is a brain chemical made from tyrosine that plays a role in motivation and reward which contributes to feelings of pleasure.
                            </Text>
                        </Box>
                        <Text>
                            If we don’t get enough protein, the body may not have optimal levels of tyrosine or tryptophan, which in turn limits the formation of serotonin and dopamine. This has been associated with low mood and aggression. As such, prioritizing protein including soy products, legumes, nuts, and seeds consistently helps make sure our brain has the right tools to make mood-influencing chemicals and hormones.
                        </Text>
                    </Flex>
                </Flex>

                {/* third part here  */}
                <Box>
                    <Image src='' borderRadius={'15px'} />
                </Box>


                <Flex direction={'column'} textAlign={'start'} gap='30px'>
                    <Heading fontFamily="cotorisb" fontSize={'40px'}>Other tips for food and mood</Heading>
                    <Flex direction={'column'} gap='12px'>
                        <Text>
                            Aside from protein, there are other nutrients critical for the optimal function of mood-influencing chemicals and hormones.
                        </Text>
                        <Heading fontSize='25px' fontFamily="cotorisb" color='dgreen'>No. 01 - Favour brain fuel </Heading>
                        <Text>Although the brain makes up just 2% of our body weight, it uses at least 20% of the body's energy - meaning its fuel is critical! Carbohydrates are a key energy source for the brain and essential in forming serotonin important for mood regulation. When we consume carbohydrates they're broken down by the body into a sugar called glucose which is the preferred energy source for the brain. The body releases a hormone called insulin which helps cells access the sugar for fuel, while also supporting the entry of tryptophan (needed for serotonin formation) into the brain.</Text>
                        <Text>
                            Aside from getting enough carbohydrates, choosing foods that break down and release sugar more steadily in the body has also been linked with less fatigue and mood disturbances. Some carbohydrates that release sugar more slowly to provide the brain with steady fuel include:
                        </Text>

                    </Flex>
                    <Box>
                        <Image src='' borderRadius={'15px'}  />
                    </Box>
                    <Flex direction={'column'} gap='12px'>

                        <Heading fontSize='25px' fontFamily="cotorisb" color='dgreen'>No. 2 - Support hormones and brain chemicals</Heading>
                        <Text>There are a few smaller nutrients critical for the optimal function of mood-influencing chemicals and hormones.</Text>
                        <Text>
                            B vitamins
                        </Text>
                        <Text>B vitamins, such as folate, vitamin B6, and B12, are crucial for optimal brain function and may be of particular importance to help manage poor mood and stress. A possible reason for this is that B vitamins are involved in the formation of serotonin and dopamine. Adequate levels of folate, vitamin B6, and vitamin B12 also help the body break down a protein called homocysteine. High levels of homocysteine are associated with depression of mood and poor cognitive function.</Text>
                        <Box p='15px' bg='gray' borderRadius={'10px'}>
                            <Text>
                                <b>Dopamine</b> is a brain chemical made from tyrosine that plays a role in motivation and reward which contributes to feelings of pleasure.
                            </Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Image src='' borderRadius={'15px'}  />
                    </Box>
                </Flex>

                {/* forth part here  */}
            </Flex>
        </Box>
    )
}

export default ContentPage
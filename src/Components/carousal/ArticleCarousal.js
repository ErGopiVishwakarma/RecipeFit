import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import style from '../../Styles/carousal.module.css'
// Settings for the slider

const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: `${style.slides}`,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
function ArticleCarousal({ arr, height }) {

    return (
        <Box
            pb={'60px'}
            position={'relative'}
            height={height}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <Slider {...settings} >
                {
                    arr?.map((el, ind) => (
                        <Flex direction={'column'} borderRadius={'10px'}  pb='40px' gap='20px' w='100%' key={ind} >
                            <Image src={el.image} borderRadius={'10px'} />
                            <Flex direction={'column'} alignItems={'start'} pt='10px'>
                                <Heading fontSize={'19px'} color={'gray'}>{el.heading}</Heading>
                                <Text>{el.subheading}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Slider>
        </Box>
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            style={{ ...style, display: "block", backgroundColor: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            style={{ ...style, display: "block", backgroundColor: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export default ArticleCarousal
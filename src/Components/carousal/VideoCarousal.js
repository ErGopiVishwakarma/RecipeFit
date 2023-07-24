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
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: `slides`,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
function VideoCarousal({ arr, height }) {

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
                        <Flex direction={'column'} borderRadius={'10px'} alignItems={'start'} pb='40px' gap='20px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}  >
                            <Image src={el.img} borderRadius={'10px'} />
                            <Heading color={'gray'} fontSize={'17px'} textAlign={'start'} pt='10px'>{el.title}</Heading>
                            <Text></Text>
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
        <Box textColor={'red'}
            className={className}
            style={{ ...style, display: "block", backgroundColor: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export default VideoCarousal
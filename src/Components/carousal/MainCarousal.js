import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "../../Styles/slickCss.css";
// Settings for the slider

let arr = [
  {
    image:
      "https://cdn.pickuplimes.com/cache/7f/63/7f6304c89e0ed8dca4a254be5cdc7ad4.jpg",
  },
  {
    image:
      "https://cdn.pickuplimes.com/cache/6e/31/6e31a78b669c7e59784eb59a271f679e.jpg",
  },
  {
    image:
      "https://cdn.pickuplimes.com/cache/a4/25/a4253cccc086e94364efbd49fc2a1a6a.jpg",
  },
  {
    image:
      "https://cdn.pickuplimes.com/cache/ce/e4/cee463c6325d2c434c6fbbff472c809b.jpg",
  },
  {
    image:
      "https://cdn.pickuplimes.com/cache/b0/b8/b0b8ba5a46fa366b90485d74cdc007b7.jpg",
  },
];
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  className: "slides",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function MainCarousals({ pictures, height }) {
  return (
    <Box
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
        arr?.map((el,ind)=>(
            <Box key ={ind} w='100%' h={['500px','350px','500px','100vh']}>
                <Image src={el.image} w='100%' h='100%' />
            </Box>
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
      style={{ ...style, display: "block", color: "white" }}
      onClick={onClick}
    />
  );
}

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }


export default MainCarousals;

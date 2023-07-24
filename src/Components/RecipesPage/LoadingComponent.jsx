import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Center,
  Text,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import LoadingImg from "../../Images/Icons/favicon.png";

const LoadingComponent = () => {
  return (
    <Box css={LaodCont}>
      {new Array(6).fill(1).map((item, ind) => (
        <Box key={ind + "comp"} css={Card}>
          <Skeleton css={ImgLoad}></Skeleton>
          <Skeleton css={HeadLoad}></Skeleton>
          <Box css={BadgeCont}>
            <Skeleton css={BadgeLoad}></Skeleton>
            <Skeleton css={BadgeLoad}></Skeleton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const LoadingImage = () => {
  return (
    <Center h="100vh" w="100%">
      <Image
        src={LoadingImg}
        className="spinning-image"
        css={SpinningImageCss}
      />
    </Center>
  );
};

export default LoadingComponent;

export const LaodCont = css`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  background-color: transparent;

  @media (max-width: 992px) {
    width: 87%;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 80%;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 35px;
  }
`;
export const Card = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ImgLoad = css`
  height: 500px;
  border-radius: 15px;

  @media (max-width: 992px) {
    height: 300px;
  }
  @media (max-width: 768px) {
    height: 280px;
  }
  @media (max-width: 480px) {
    height: 320px;
  }
`;
export const HeadLoad = css`
  height: 33px;
  border-radius: 8px;
  margin-top: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BadgeCont = css`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BadgeLoad = css`
  height: 28px;
  border-radius: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export const SpinningImageCss = css`
  margin: auto;
  width: 170px;
  z-index: 800;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    width: 140px;
  }
  @media (max-width: 480px) {
    width: 110px;
  }
`;

/*

export const Temp = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

*/

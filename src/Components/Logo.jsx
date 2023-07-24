import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import LogoImg from "../Images/Icons/favicon.png";

const Logo = ({ width = "250px", height = "100%" }) => {
  return (
    <NavLink to="/">
      <Box w={width} h={height} css={LogoOuterCont} fontFamily="k2d200">
        <Text css={TextCss}>Recipe</Text>
        <Image src={LogoImg} css={LogoImgCss} />
        <Text css={TextCss}>Snap</Text>
      </Box>
    </NavLink>
  );
};
 
export default Logo;

const LogoOuterCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
const LogoImgCss = css`
  width: 65px;
  height: 65px;

  @media (max-width: 992px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 480px) {
    width: 43px;
    height: 43px;
  }
`;
const TextCss = css`
  font-size: 47px;
  color: #444444;
  letter-spacing: -1px;

  @media (max-width: 992px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 34px;
  }
  @media (max-width: 480px) {
    font-size: 26px;
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

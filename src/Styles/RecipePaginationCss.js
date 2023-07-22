import { css } from "@emotion/react";

export const Outer = css`
  width: 300px;
  margin: auto;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 230px;
    margin-top: 50px;
  }
`;
export const PageCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    gap: 6px;
  }
`;
export const PageText = css`
  font-size: 18px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const InputCss = css`
  width: 40px;
  padding: 0;
  height: 43px;
  text-align: center;
  border: 2px solid;
  outline: none;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0.4rem #64825e;

  :hover {
    outline: none;
    border: 2px solid;
  }

  :focus {
    border: 2px solid;
    box-shadow: 0 0 1rem #64825e;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 35px;
    font-size: 1rem;
  }
`;

export const ArrowConts = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 60px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    gap: 5px;
    width: 50px;
  }
`;
export const Arrows = css`
  cursor: pointer;
  font-size: 28px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const hiddenArrowCss = css`
  display: none;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
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

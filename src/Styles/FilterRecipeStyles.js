import { css } from "@emotion/react";

export const OuterCont = css`
  margin-top: 80px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 480px) {
  }
`;
export const ToggleBtn = css`
  border-radius: 8px;
  transition: border-radius 0.3s;
  padding: 0px 13px;
  letter-spacing: 0.5px;
  font-weight: 300;
  height: 33px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  margin: auto;

  :hover {
    border-radius: 40px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const FilterParentCont = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
  }
`;
export const FirstFiltersHolder = css`
  margin: auto;
  max-width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    margin-top: 25px;
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 565px) {
    max-width: 90%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 15px;
    gap: 16px;
  }
`;
export const SecondFiltersHolder = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 35px;
  width: 46%;

  @media (max-width: 992px) {
    width: 70.5%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 30px;
  }
  @media (max-width: 565px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 16px;
    gap: 18px;
  }
`;
export const BtnCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 255px;
  margin: auto;
  margin-top: 45px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 248px;
  }
`;
export const SubmitBtn = css`
  color: white;
  border-radius: 8px;
  transition: border-radius 0.3s;
  padding: 0px 13px;
  letter-spacing: 0.5px;
  font-weight: 300;
  height: 33px;
  cursor: pointer;
  font-size: 15px;
  width: 120px;

  :hover {
    border-radius: 50px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ResetBtn = css`
  color: white;
  border-radius: 8px;
  transition: border-radius 0.3s;
  padding: 0px 13px;
  letter-spacing: 0.5px;
  font-weight: 300;
  height: 33px;
  cursor: pointer;
  font-size: 15px;
  width: 120px;

  :hover {
    border-radius: 50px;
  }

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

import { css } from "@emotion/react";

export const Outer = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// Single Recipe Details
export const DetailsCont = css`
  display: flex;
  width: 85%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 80%;
    gap: 35px;
  }
  @media (max-width: 768px) {
    gap: 25px;
  }
  @media (max-width: 480px) {
    gap: 15px;
    width: 90%;
  }
`;
export const ImgCss = css`
  border-radius: 15px;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;
export const Header = css`
  font-size: 5.4rem;
  font-weight: 300;
  text-align: left;
  line-height: 1.15;

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const BadgeCont = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  margin-left: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    gap: 5px;
    margin-left: 6px;
  }
  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 8px;
    margin-left: 5px;
  }
`;
export const TimeBadge = css`
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.15em 0.5em;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.15em 0.4em;
    gap: 5px;
  }
  @media (max-width: 480px) {
    font-size: 0.73rem;
    padding: 0.17em 0.5em;
  }
`;
export const TimeIcon = css`
  color: white;
  font-size: 13.5px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const CateBadge = css`
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.15em 0.6em;
  border-radius: 0.25rem;
  color: white;
  letter-spacing: 0.4px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.15em 0.4em;
    gap: 5px;
  }
  @media (max-width: 480px) {
    font-size: 0.73rem;
    padding: 0.17em 0.5em;
  }
`;

export const DescriptionCss = css`
  font-weight: 400;
  text-align: justify;
  font-style: italic;
  margin-top: 20px;
  font-size: 15px;
  line-height: 20px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    margin-top: 13px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const QtyAndTimeCont = css`
  display: flex;
  margin: auto;
  margin-top: 12px;
  width: 85%;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    margin-top: 8px;
    width: 90%;
  }
`;
export const ChildOptionsCont = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ChildOptionsText = css`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0.3rem;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 0.2rem;
  }
`;
export const ChildOptionsLowerText = css`
  font-size: 16px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const QtyInpAndBtnCont = css`
  width: 121px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 103px;
  }
`;
export const IncBox = css`
  font-size: 20px;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: rgb(214, 63, 7);
    color: white;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 18px;
    height: 30px;
    width: 30px;
  }
`;
export const DecBox = css`
  font-size: 20px;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  transition: 0.2s ease-in-out;

  :hover {
    background-color: rgb(0, 157, 0);
    color: white;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 18px;
    height: 30px;
    width: 30px;
  }
`;
export const ServingInpCss = css`
  width: 45px;
  height: 35px;
  border: 2px solid;
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0;
  text-align: center;
  outline: none;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0.4rem #64825e;

  :hover {
    outline: none;
    border: 2px solid;
  }

  :focus {
    border: 2px solid;
    box-shadow: 0 0 0.7rem #64825e;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 38px;
    height: 30px;
    border: 1px solid;
    border-radius: 6px;
    font-size: 1rem;

    :hover {
      outline: none;
      border: 1px solid;
    }

    :focus {
      border: 1px solid;
      box-shadow: 0 0 0.6rem #64825e;
    }
  }
`;

export const FreeFromOuter = css`
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 20px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    border-radius: 8px;
    padding: 6px 12px;
    margin-top: 16px;
  }
`;
export const FreeFromHeader = css`
  text-align: left;
  font-size: 19px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const FreeFromContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 80%;
  margin-top: 7px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin-top: 4px;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin-top: 1px;
  }
`;
export const FreeFromIconCard = css`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    gap: 4.5px;
  }
  @media (max-width: 480px) {
    gap: 3px;
  }
`;
export const FreeFromName = css`
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
export const FreeIconImg = css`
  width: 50px;
  height: 50px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

// Ingredients and Direction Css
export const IngDirectImagesOuter = css`
  margin: auto;
  width: 85%;
  margin-top: 45px;

  @media (max-width: 992px) {
    width: 80%;
    margin-top: 35px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 480px) {
    width: 90%;
    margin-top: 20px;
  }
`;
export const IngAndDirectCont = css`
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    gap: 15px;
  }
`;
export const IngredientsCont = css`
  text-align: left;
  padding: 18px;
  border-radius: 10px;
  width: 43.5%;
  height: fit-content;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    border-radius: 6px;
    padding: 10px;
  }
`;
export const BuyIngButton = css`
  margin: auto;
  color: white;
  letter-spacing: 0.5px;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: border-radius 0.3s;
  cursor: pointer;

  :hover {
    border-radius: 40px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
    border-radius: 6px;
    padding: 0px 10px;
    height: 33px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    margin-top: 7px;
    border-radius: 5px;
    padding: 0px 10px;
    height: 30px;
    margin-bottom: 7px;
  }
`;
export const HeadingIngAndDirect = css`
  font-size: 2.7rem;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  @media (max-width: 768px) {
    font-size: 1.65rem;
    margin-bottom: 6px;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }
`;
export const DirectCont = css`
  text-align: left;
  width: 56.5%;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const UncrossedText = css`
  text-align: left;
  font-size: 17px;
  line-height: 25px;
  margin-bottom: 10px;

  :hover {
    color: #50684b;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 4px;
  }
`;
export const CrossedText = css`
  text-align: left;
  font-size: 17px;
  line-height: 25px;
  margin-bottom: 10px;

  :hover {
    color: #50684b;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 4px;
  }
`;
export const RecipeImageStyles = css`
  margin: auto;
  text-align: center;
  height: 700px;
  margin-top: 25px;
  border-radius: 15px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    height: 500px;
    margin-top: 20px;
    border-radius: 11px;
  }
  @media (max-width: 480px) {
    height: 350px;
    margin-top: 20px;
    border-radius: 8px;
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

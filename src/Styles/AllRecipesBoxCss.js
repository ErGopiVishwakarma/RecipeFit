import { css } from "@emotion/react";

export const OuterCont = css`
  margin-top: 70px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 480px) {
    margin-top: 55px;
  }
`;

export const RecipeCardsHolder = css`
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
export const RecipeCardImgBox = css`
  transition: all 0.3s ease;
  overflow: hidden;
  border-radius: 8px;
  transition: border-radius 0.3s;
  background-color: transparent;

  :hover {
    border-radius: 18px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RecipeCardImg = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RecipeNameCss = css`
  text-decoration: none;
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  margin-top: 15px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    margin-top: 15px;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    margin-top: 13px;
  }
`;
export const BadgeCont = css`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    gap: 5px;
  }
  @media (max-width: 480px) {
    gap: 6px;
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

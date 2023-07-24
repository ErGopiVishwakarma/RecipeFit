import { css } from "@emotion/react";

export const SuggestedOuter = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const SuggestedHeader = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ArrowCss = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// Comments Styles
export const CommentOuter = css`
  margin: auto;
  width: 100%;
  margin-top: 80px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 85%;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
    width: 90%;
  }
`;
export const CommentHeader = css`
  text-align: left;
  font-size: 40px;
  margin-bottom: 15px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 5px;
  }
`;
export const InputCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
`;
export const InputCss = css`
  padding: 10px;
  height: 43px;
  text-align: left;
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
    padding: 8px;
    height: 38px;
    border-radius: 8px;
    font-size: 1rem;

    :focus {
      border: 2px solid;
      box-shadow: 0 0 0.6rem #64825e;
    }
  }
  @media (max-width: 480px) {
    height: 35px;
    border-radius: 5px;
    font-size: 1rem;
    padding: 5px;
    border: 1px solid;

    :hover {
      outline: none;
      border: 1px solid;
    }

    :focus {
      border: 1px solid;
      box-shadow: 0 0 0.5rem #64825e;
    }
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
  font-size: 15px;
  width: 120px;
  margin-top: 35px;
  cursor: pointer;

  :hover {
    border-radius: 50px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    border-radius: 6px;
    padding: 0px;
    height: 33px;
    font-size: 15px;
    width: 120px;
    margin-top: 25px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
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

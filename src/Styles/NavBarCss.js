import { css } from "@emotion/react";

export const NavBarOuter = css`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 180px;
  backdrop-filter: blur(30px);

  @media (max-width: 1160px) {
    padding: 0px 110px;
  }
  @media (max-width: 1010px) {
    padding: 0px 70px;
  }
  @media (max-width: 992px) {
    padding: 0px 50px;
  }
  @media (max-width: 860px) {
    padding: 0px 40px;
  }
  @media (max-width: 768px) {
    padding: 0px 35px;
  }
  @media (max-width: 480px) {
    padding: 0px 23px;
  }
`;
export const ScrolledNavOuter = css`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0px 180px;
  backdrop-filter: blur(30px);
  visibility: hidden;
  opacity: 0;
  transition: visibility 2s, opacity 0.5s linear;
  justify-content: space-between;

  @media (max-width: 1160px) {
    padding: 0px 110px;
  }
  @media (max-width: 1010px) {
    padding: 0px 70px;
  }
  @media (max-width: 992px) {
    padding: 0px 50px;
  }
  @media (max-width: 860px) {
    padding: 0px 40px;
  }
  @media (max-width: 768px) {
    padding: 0px 35px;
  }
  @media (max-width: 480px) {
    padding: 0px 23px;
  }
`;
export const LeftNavCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;

  @media (max-width: 992px) {
    width: 32%;
  }
  @media (max-width: 860px) {
    width: 34%;
  }
  @media (max-width: 768px) {
    width: auto;
  }
  @media (max-width: 480px) {
  }
`;
export const SearchIconCss = css`
  font-size: 18px;
  cursor: pointer;

  :hover {
    color: #50684b;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const NavLinkCss = css`
  font-size: 21px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const RightNavCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  @media (max-width: 992px) {
    width: 24%;
  }
  @media (max-width: 860px) {
    width: 25%;
  }
  @media (max-width: 768px) {
    width: auto;
  }
  @media (max-width: 480px) {
  }
`;
export const MenuIconCss = css`
  font-size: 35px;
  cursor: pointer;
  width: 40px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 30px;
    font-size: 27px;
  }
`;
export const MenucloseCss = css`
  font-size: 28px;
  cursor: pointer;
  width: 40px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 30px;
    font-size: 23px;
  }
`;

// MenuCss
export const MenuContentBox = css`
  z-index: 50;
  backdrop-filter: blur(30px);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 40px;
  padding-bottom: 35px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: none;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    display: block;
    z-index: 50;
    backdrop-filter: blur(30px);
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 35px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  @media (max-width: 480px) {
    padding-top: 25px;
    padding-bottom: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    gap: 15px;
  }
`;
export const MenuLinkCss = css`
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Search Box
export const VisibleSearch = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 100%;
  z-index: 800;
  position: fixed;
  background-color: rgb(100, 130, 94, 0.7);
  box-shadow: 0 0 7px grey;
  padding-top: 43px;
  transition: top 0.6s;
  height: 5rem;
  backdrop-filter: blur(15px);

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    padding-top: 33.5px;
    height: 4rem;
  }
  @media (max-width: 480px) {
    padding-top: 27px;
    height: 3.3rem;
  }
`;
export const FadedSearch = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 100%;
  z-index: 800;
  position: fixed;
  background-color: rgb(100, 130, 94, 0.7);
  box-shadow: 0 0 7px grey;
  padding-top: 43px;
  transition: top 0.6s;
  height: 5rem;
  backdrop-filter: blur(15px);
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 0.4s linear;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    padding-top: 33.5px;
    height: 4rem;
  }
  @media (max-width: 480px) {
    padding-top: 27px;
    height: 3.3rem;
  }
`;
export const SearchInpCss = css`
  background-color: white;
  width: 80%;
  margin: auto;

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

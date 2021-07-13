import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 95px);
  background-color: var(--orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* padding-top: 20px; */
`;

export const LottieWrap = styled.div`
  width: 100%;
  justify-content: flex-end !important;

  display: none;

  div {
    bottom: 45px;
    opacity: 0.7 !important;
  }

  @media screen and (min-width: 720px) {
    display: flex;
    div {
      width: 200px !important;
      height: 180px !important;
      margin: 0 !important;
      position: relative;
      bottom: 80px;
    }
  }

  @media screen and (min-width: 1000px) {
    div {
      width: 200px !important;
      height: 180px !important;
    }
  }
  @media screen and (min-width: 1500px) {
    div {
      width: 280px !important;
      height: 260px !important;
      bottom: 20px;
      right: 20px;
    }
  }
`;

export const Header = styled.header`
  margin-top: 103px;
  h2 {
    font-weight: 700;
    color: var(--white);
    font-size: 35px;
    margin-bottom: 42px;
  }

  @media screen and (min-height: 736px) and (max-width: 719px) {
    margin-top: 0px;
    h2 {
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 880px) {
    h2 {
      margin-top: 30px;
      margin-left: 280px;
    }
  }

  @media screen and (max-height: 665px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 720px) {
    h2 {
      margin-top: 30px;
      margin-left: 280px;

      font-size: 35px;

      padding: 10px;
    }
  }

  @media screen and (min-width: 1100px) {
    h2 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1400px) {
    margin-top: 0px;
    h2 {
      margin-top: 0px;
      position: relative;
      top: 20px;
    }
  }

  @media screen and (min-width: 1500px) {
    h2 {
      position: relative;
      top: 70px;
    }
  }
`;

export const Page = styled.div`
  width: 90%;
  min-height: 340px;

  position: relative;
  margin-bottom: 30px;
  bottom: 40px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 720px) {
    width: 55%;
    bottom: 140px;
    margin-left: 270px;
    height: 80vh;
    margin-bottom: 0px;
    max-width: 900px;
    min-height: 350px;
  }

  @media screen and (min-width: 1400px) {
    min-height: 650px;
  }
`;

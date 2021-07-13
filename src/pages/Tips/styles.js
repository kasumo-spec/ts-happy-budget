import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 95px);
  background-color: var(--blue-tips);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* padding-top: 20px; */
`;

export const LottieWrap = styled.div`
  display: flex !important;
  width: 100%;
  justify-content: flex-end !important;

  div {
    width: 140px !important;
    height: 180px !important;
    margin: 0 !important;
    position: relative;
    bottom: 45px;
    opacity: 0.7 !important;
  }

  @media screen and (min-width: 720px) {
    div {
      width: 250px !important;
      height: 180px !important;
      margin: 0 !important;
      position: relative;
      bottom: 70px;
    }
  }

  @media screen and (min-width: 1000px) {
    div {
      bottom: 120px;
    }
  }
  @media screen and (min-width: 1400px) {
    div {
      width: 360px !important;
      height: 210px !important;
      bottom: 80px;
    }
  }
`;

export const Header = styled.header`
  h2 {
    font-weight: 700;
    color: var(--white);
    font-size: 35px;
    margin-top: 80px;
  }

  @media screen and (min-width: 375px) {
    h2 {
      margin-top: 120px;
    }
  }

  @media screen and (min-height: 736px) and (max-width: 719px) {
    h2 {
      margin-top: 40px;
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
    h2 {
      position: relative;
      top: 50px;
    }
  }
`;

export const Page = styled.div`
  width: 90%;
  min-height: 250px;

  position: relative;
  margin-bottom: 30px;
  bottom: 80px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  overflow-y: scroll;
  height: 250px;

  @media screen and (min-width: 360px) {
    min-height: 300px;
  }

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

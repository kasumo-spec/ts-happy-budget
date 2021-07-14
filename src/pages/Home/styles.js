import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  background-color: #a1867f;
`;

export const ContainerSVG = styled.div`
  position: relative;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: var(--white-green);
  svg {
    transition: all 300ms;
  }

  .top {
    display: none;
  }

  .bottom {
    display: none;
  }

  @media screen and (min-width: 700px) {
    height: 100vh;
    svg {
      width: 75vmin;
    }

    .top {
      display: block;
      position: absolute;
      left: -264px;
      top: 0px;
    }

    .bottom {
      display: block;
      position: absolute;
      right: -150px;
      bottom: 40px;
    }
  }

  @media screen and (min-height: 150px) and (max-height: 800px) and (min-width: 1000px) {
    .top {
      top: -100px;
    }

    .bottom {
      bottom: -10px;
    }
  }

  @media screen and (min-width: 1400px) {
    svg {
      width: 100vmin;
    }

    .top {
      left: -244px;
      top: -20px;
    }

    .bottom {
      right: -185px;
      bottom: 20px;
    }
  }
`;

export const MainContainer = styled.section`
  .mainImg {
    height: 90% !important;

    width: 90% !important;
    overflow: hidden !important;
    margin: 0 auto;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;

    .mainImg {
      height: 38vh !important;
      max-height: 360px;

      width: 59% !important;
      margin-right: 30px;
    }
  }

  @media screen and (min-height: 150px) and (max-height: 800px) and (min-width: 1000px) {
    width: 20% !important;
    div {
      position: relative;
      height: 50vh !important;
      width: 100% !important;
      max-width: 380px;
      max-height: 300px;
    }
  }

  @media screen and (min-width: 900px) {
    width: 100% !important;
    .mainImg {
      height: 80vh !important;
      max-width: 550px;
      max-height: 400px;
      width: 100% !important;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    .mainImg {
      height: 80vh !important;
      max-width: 650px;
      max-height: 500px;
    }
  }

  @media screen and (min-width: 1400px) {
    max-width: 1600px;
    .mainImg {
      max-width: 800px;
    }
  }
`;

export const MainText = styled.section`
  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 800;
    padding: 10px 30px;
  }

  h3 {
    font-size: 22px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 500px) {
    h2 {
      margin-top: 30px;
    }
  }

  @media screen and (min-width: 700px) {
    align-self: flex-start;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 400px;
    height: 40vh;
    margin-left: 30px;
  }

  @media screen and (min-width: 900px) {
    width: 530px;

    h2 {
      font-size: 45px;
      padding: 10px 30px;
    }

    h3 {
      font-size: 28px;
      padding: 10px 30px;
    }
  }

  @media screen and (min-height: 150px) and (max-height: 800px) and (min-width: 1000px) {
    position: absolute;
    bottom: 150px;
    left: 50px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1400px) {
    width: 630px;

    position: relative;
    bottom: 100px;
    left: 50px;
    h2 {
      font-size: 52px;
      padding: 10px 30px;
    }
    h3 {
      font-size: 35px;
      padding: 10px 30px;
    }
  }
`;

export const MainImage = styled.div``;

export const TipsContainer = styled.section`
  background-color: #29e0e8;
  height: 100vh;
  width: 100%;
  position: relative;
  bottom: 110px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row-reverse;
    height: 80vh;
  }
`;

export const SecondaryText = styled.section`
  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 800;
    padding: 10px 30px;
  }

  h3 {
    font-size: 22px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 500px) {
    h2 {
      margin-top: 90px;
    }
  }

  @media screen and (min-width: 700px) {
    text-align: start;
    width: 50%;
    margin-top: 50px;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 40px;
      padding: 10px 30px;
      width: 430px;
    }

    h3 {
      font-size: 22px;
      padding: 10px 30px;
      width: 430px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-height: 600px;
    /* justify-content: center; */
    h2 {
      font-size: 50px;
      padding: 10px 30px;
      width: 500px;
    }

    h3 {
      font-size: 30px;
      padding: 10px 30px;
      width: 500px;
    }
  }

  @media screen and (min-width: 1400px) {
    /* max-height: 550px; */
  }
`;

export const SecondaryImage = styled.div`
  div {
    height: 90% !important;

    width: 90% !important;
    overflow: hidden !important;
    margin: 0 auto;
  }

  @media screen and (min-width: 700px) {
    width: 50%;
    margin-top: 50px;
    div {
      max-width: 450px;
      max-height: 450px;
    }
  }

  @media screen and (min-height: 150px) and (max-height: 800px) and (min-width: 1000px) {
    width: 20% !important;
    div {
      position: relative;
      height: 50vh !important;
      width: 100% !important;
      max-width: 380px;
      max-height: 300px;
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      height: 80vh !important;
      max-width: 400px;
      max-height: 400px;
      width: 100% !important;
    }
  }

  @media screen and (min-width: 1200px) {
    min-width: 800px;
    div {
      height: 80vh !important;
      max-width: 500px;
      max-height: 500px;
    }
  }

  @media screen and (min-width: 1400px) {
    max-width: 550px;

    div {
      height: 80vh !important;
      max-width: 550px;
      max-height: 550px;
    }
  }
`;

export const ExpenseContainer = styled.section`
  background-color: #ff686b;
  height: 100vh;

  width: 100%;
  position: relative;
  bottom: 110px;
  color: var(--white-green);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    height: 80vh;
  }
`;

export const BudgetContainer = styled.section`
  background-color: #a3d3f8;
  height: 80vh;
  width: 100%;
  position: relative;
  bottom: 110px;
  color: var(--white-green);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row-reverse;
    height: 80vh;
  }
`;

export const DevelopersContainer = styled.section`
  background-color: #a1867f;
  height: 340vh;
  width: 100%;
  position: relative;
  bottom: 110px;
  color: var(--white-green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DevelopersText = styled.div`
  text-align: center;
  margin-top: 40px;
  h2 {
    font-size: 30px;
    width: 280px;
    font-weight: 800;
  }

  h3 {
    font-size: 20px;

    width: 280px;
  }
  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 50px;
      padding: 10px 30px;
      width: 800px;
    }

    h3 {
      font-size: 30px;
      padding: 10px 30px;
      width: 800px;
      font-weight: 500;
    }
  }
`;

export const DeveloperWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Developer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    margin: 50px 20px 20px 20px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 150px;

  &::after {
    content: " ";
    position: absolute;
    z-index: 1;
    border: 3px solid white;
    border-radius: 5px;
    width: 100%;
    height: 150px;
    transform: translate(-90%, 10%);
  }

  &:hover::after {
    transition-duration: 500ms;
    transform: translate(-93%, 7%);
  }
`;

export const DeveloperImg = styled.img`
  width: 150px;
  border-radius: 5px;
  position: relative;
  z-index: 2;
  filter: hue-rotate(180deg) sepia(75%) contrast(110%) saturate(200%)
    hue-rotate(180deg);
  transition-duration: 500ms;
  &:hover {
    filter: none;
  }
`;

export const LinksContaner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
  }
  h2 {
    margin-top: 20px;
    font-size: 26px;
    font-weight: 500;
    position: relative;
    left: 5px;
  }

  a {
    svg {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
  }
`;

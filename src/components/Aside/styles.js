import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 100%;
  height: 160px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 2fr 2fr;
  background-color: var(--violet);

  button {
    padding: 5px 25px;
  }

  @media screen and (min-width: 720px) {
    height: 100vh;
    width: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--violet);
    padding: 150px 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 10px;

  h2 {
    color: var(--white);
    font-weight: 700;
    margin-bottom: 8px;
    text-align: center;
    font-size: 17px;
  }

  @media screen and (min-width: 720px) {
    justify-content: center;
    margin-bottom: 80px;

    h2 {
      margin-bottom: 12px;
      font-size: 24px;
    }
  }
`;

export const Budget = styled.div`
  width: 98%;
  height: 35px;
  margin: 10px 5px;
  border-radius: 5px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 13px;
  }

  @media screen and (min-width: 400px) {
    width: 170px;
    height: 40px;

    p {
      font-size: 16px;
    }
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-right: 8px;
  padding-bottom: 12px;

  a {
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    padding: 0 6px 18px;

    span {
      color: var(--white);
      font-weight: 600;
      font-size: 18px;
      display: none;
    }

    svg {
      fill: var(--white);
      margin-right: 0;
      width: 20px;
      height: 28px;
    }

    &.navlink--active {
      border-radius: 0;

      span {
        color: var(--violet);
      }

      svg {
        fill: var(--violet);
      }
    }
  }

  .indicator {
    position: absolute;
    left: ${(props) => props.leftIndicator};
    top: 25px;
    background-color: var(--white);
    height: 50px;
    width: 32px;
    border-radius: 5px;
    z-index: 1;
    transition: left 400ms;
  }

  @media screen and (min-width: 500px) {
    width: 100%;
    /* justify-content: center; */
    svg {
      min-width: 28px;
      height: 28px;
    }

    .indicator {
      position: absolute;
      left: ${(props) => props.leftIndicator};
      top: 25px;
      background-color: var(--white);
      height: 50px;
      width: 38px;
      border-radius: 5px;
      z-index: 1;
      transition: left 400ms;
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    height: inherit;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8px 24px;
      position: relative;
      z-index: 2;
      margin-bottom: 16px;
      margin-right: 0px;

      span {
        font-size: 24px;
        color: var(--white);
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      svg {
        fill: var(--white);
        margin-right: 8px;
      }
    }

    .indicator {
      position: absolute;
      top: ${(props) => props.topIndicator};
      background-color: var(--white);
      height: 50px;
      width: 190px;
      border-radius: 5px;
      z-index: 1;
      transition: 400ms;
    }
  }
`;

export const ButtonLogoffWrapper = styled.div`
  height: 38%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  padding-top: 18px;

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

import styled from "styled-components";
import { FaPiggyBank } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 5px;
  font-size: 0.8em;

  h3 {
    font-weight: 700;
    font-size: 1.3em;
    text-align: center;
  }

  button {
    background-color: var(--white);
    display: flex;
    align-items: center;
  }
`;

export const FaPigStyled = styled(FaPiggyBank)`
  fill: var(--violet);
  width: 15%;
  height: 35px;
`;

export const BoxTips = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TipsItems = styled.button`
  width: 65%;
  margin: 0px auto 15px auto;
  padding: 8px;
  background-color: #70c3f7;

  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.77), 0 3px 10px 0 rgba(0, 0, 0, 0);

  display: flex;
  align-items: center;

  font-weight: 500;

  &:hover {
    background-color: #a8dbfa;
  }

  svg {
    width: 30px;
    margin-right: 15px;
    fill: grey;
    color: grey;
  }
`;

export const ArrowIcon = styled(TiArrowRightThick)`
  width: 35px;
  height: 35px;
  padding: 4px 2px 5px 2px;
  margin: 0 5px;
  background-color: var(--health);
  border-radius: 50%;
  cursor: pointer;
  fill: var(--white-green);
  position: relative;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const NewsPaperIcon = styled(IoNewspaperOutline)`
  color: var(--violet);
  width: 25px;
  height: 35px;
  margin: 7px;
`;

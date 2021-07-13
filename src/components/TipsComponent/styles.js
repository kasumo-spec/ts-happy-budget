import styled from "styled-components";
import { FaPiggyBank } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";


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
	  width: 60%;
		margin: 5px auto;
		background-color: #A8DBFA;
		border-radius: 5px;
		box-shadow: 0px 3px 4px rgb(0 0 0 / 25%);
    display: flex;
    align-items: center;
`;

export const ArrowIcon = styled(FaArrowCircleRight)`
  color: var(--orange);
  width: 32px;
  height: 35px;
  margin: 0 5px;
`;

export const NewsPaperIcon = styled(IoNewspaperOutline)`
    color: var(--violet);
    width: 25px;
    height: 35px;
    margin: 7px;
`;
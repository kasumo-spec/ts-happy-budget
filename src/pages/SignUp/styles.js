import styled from "styled-components";
import Button from "../../components/Button";

export const ContainerSignup = styled.div`
    background-color: #edfcf9;
    height: 100vh;

    h1 {
        font-size: 3em;
        font-weight: 700;
        text-align: center;
        letter-spacing: 3px;
    }

    form {
        width: 55%;
        max-width: 350px;
        margin: auto;
        text-align: center;
    }

    form div {
        width: 100%;
    }

    p {
        margin: 5px 0 15px;
        text-align: start;
    }

    @media(min-width: 460px) {
        background-color: #fff;

        h1 {
            padding-top: 25px;
            font-size: 2.5em;
        }
    }
`;

export const ButtonForm = styled(Button)`

    @media(max-width: 1000px){
        width: 100px;
        padding: 8px;
        font-size: 1em;
    }
`;
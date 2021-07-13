import styled from "styled-components";

export const Container = styled.div`
    padding: 23px;
    display: flex;
    justify-content: space-around;
    
    width: 100%;

    .text{
        width: 70%; 
    }
    .image{
        width: 30%;
        padding: 0 10px;
        margin-top: 53px;
    }

    p{
        padding: 6px;
        text-align: justify;
        margin: 7px 5px;
    }
    h2{
        font-size: 1.3em;
        font-weight: 600;
        margin: 3px;
        text-align: center;
    }
    img{
        width: 100%;
        height: 350px;
    }
    .box{
        display: flex;
        justify-content: space-around;
        margin: 28px 0;
    }
    .box img{
        margin-top: -28px;
    }
    .imageSmall{
        height: 100%;
        margin-top: -28px;
    }
    .imgDecimo{
        height: 187px;
    }
    @media screen and (max-width: 540px) {
    .image{
        display: none;
    }
  }
`;
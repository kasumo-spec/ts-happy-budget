import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //primary's colors:
        --white: #fff9ff;
        --white-green: #DCF9F6;
        --black: #0C090D;
        --violet: #341E48;
        --blue-green: #053E61;
        --orange: #F06543;
        --green: #04B43B;
        --blue-tips: #0973B4;
        --button-hover:#584077;
        //buttonsprimary's colors:
        --salary: #3cb1b9;
        --gift: #a33e57;
        --investment: #3e517a;
        --food: #F0803C;
        --market: #A1867F;
        --health: #ff686b;
        --pet: #6c91c2;
        --home: #654a3e;
        --hobby: #f5d329;
        --study: #00c49a;
        --transport: #495383;
        --others: #057ef0;
    }
        

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: var(--black);
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #0049A3;
        font-weight: 500;
    }

    button {
        cursor: pointer;
        border: none;
    }

    button, input{
        outline: none;
    }

    body {
        margin-top: 95px;
        height: calc(100vh - 95px);
        background-color: var(--white-green);
        
    }

    ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 4px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;

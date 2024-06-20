import { createGlobalStyle } from "styled-components";
import PretendardSemiBold from "@/assets/fonts/Pretendard-SemiBold.woff2";
import PretendardMedium from "@/assets/fonts/Pretendard-Medium.woff2";
import PretendardRegular from "@/assets/fonts/Pretendard-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "pretendard";
        src: local("pretendard"), url(${PretendardSemiBold}) format("woff2");
        font-style: normal;
        font-weight: 600;
    }
    @font-face {
        font-family: "pretendard";
        src: local("pretendard"), url(${PretendardMedium}) format("woff2");
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: "pretendard";
        src: local("pretendard"), url(${PretendardRegular}) format("woff2");
        font-style: normal;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
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
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    html {
        font-size: 20px;
    }
    body {
        font-size:1rem;
        font-family: "pretendard";
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        background: none;
        border: none;
        padding:0;
        cursor: pointer;
    }
    textarea,
    button,
    input,
    input::placeholder,
    textarea::placeholder {
        font-family: "pretendard", sans-serif;
    }
    a {
        text-decoration: none;
    }
`;

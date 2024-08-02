import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Fonts";

const Main = styled.div`
    padding-bottom: 100px;

    @media ${theme.media.mobile} {
            padding-bottom: 50px;
        }
`

const MainDiscription = styled.div`
    padding: 40px 0;
`

const Name = styled.h2`
    ${font({weight: 700, fmax: 50, fmin: 24})}
    max-width: 124px;
`

const MainTitle = styled.div`
    h1, span {
        ${font({fmax: 18, fmin: 14})}
    }
`

const LangSelection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    min-height: 100%;
    gap: 20px; 

    &::before {
        content: "";
        width: 18px;
        height: 3px;
        background-color: ${theme.colors.font};
        position: absolute;
        top: 50%;
        transform: translateX(9px)
    }
`

const ButtonLang = styled.button`
    font-weight: 600;
    color: ${theme.colors.fontLite};
    transform: rotate(-90deg);

    &:hover {
        color: ${theme.colors.font};
    }

`

const Photo = styled.img`
    max-width: 943px;
    width: 100%;
    max-height: 387px;
    object-fit: cover;
    object-position: 0 45%;

    @media ${theme.media.mobile} {
        max-height: 287px;
    }
`


export const S = {
    Main,
    MainDiscription,
    Name,
    MainTitle,
    LangSelection,
    ButtonLang,
    Photo
}
import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/main_foto.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction = 'column'>
                    <MainDiscription>
                        <Name>Denis Novik</Name>
                        <MainTitle>
                            <h1>UX | UI designer</h1>
                            <span>24 years old, Minsk</span>
                        </MainTitle>
                        <LangSelection>
                            <ButtonLang>RU</ButtonLang>
                            <ButtonLang>ENG</ButtonLang>
                        </LangSelection>
                    </MainDiscription>
                    <Photo src={photo} />
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 680px;
    display: flex;
`

const Photo = styled.img`
    max-width: 943px;
    max-height: 387px;
    object-fit: cover;
    object-position: 0 45%;
`
const Name = styled.h2`
    max-width: 124px;
    font-size: 47.34px;
    font-weight: 700;
`

const MainTitle = styled.div`
    h1, span {
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
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

const MainDiscription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 188.5px;
`


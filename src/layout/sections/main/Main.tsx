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
                <MainDiscription>
                    <FlexWrapper justify='space-between' align='center'>
                        <Name>Denis Novik</Name>
                        <MainTitle>
                            <h1>UX | UI designer</h1>
                            <span>24 years old, Minsk</span>
                        </MainTitle>
                        <LangSelection>
                            <ButtonLang>RU</ButtonLang>
                            <ButtonLang>ENG</ButtonLang>
                        </LangSelection>
                    </FlexWrapper>
                </MainDiscription>
                <Photo src={photo} />
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    padding-bottom: 100px;
`

const MainDiscription = styled.div`
    padding: 40px 0;
`

const Name = styled.h2`
    max-width: 124px;
    font-size: 47px;
    font-weight: 700;
    @media (max-width: 390px) {
        font-size: 36px;
    }
`

const MainTitle = styled.div`
    h1, span {
        font-size: 18px;
        font-style: normal;
        font-weight: normal;

        @media (max-width: 390px) {
            font-size: 16px;
        }
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
`




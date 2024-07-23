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
                <FlexWrapper align={"center"} justify={"space-between"}>
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
                <Photo src={photo} />
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
`

const Photo = styled.img`
    width: 944px;
    height: 387px;
    object-fit: cover;
`
const Name = styled.h2`
    font-size: 47.34px;
`

const MainTitle = styled.div`
    
`

const LangSelection = styled.div`
    display: flex;
    gap: 5px;
    transform: rotate(-90deg);
    
    
`
const ButtonLang = styled.button`
    
`
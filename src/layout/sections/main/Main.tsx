import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/main_foto.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <Name>Alla Demina</Name>
                <MainTitle>
                    <h1>Frontend Developer</h1>
                    <span>32 years old, Moscow</span>
                </MainTitle>
                <LangSelection>
                    <ButtonLang>RU</ButtonLang>
                    <ButtonLang>ENG</ButtonLang>
                </LangSelection>
            </FlexWrapper>
            <Photo src={photo} />
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: #818181;
    max-width: 945px;
    margin: 0 auto;
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
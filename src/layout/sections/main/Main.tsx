import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/main_foto.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <Name>Alla Demina</Name>
                <div>
                <h1>Frontend Developer</h1>
                <span>32 years old, Moscow</span>
                </div>
                <a href="">RU</a>
                <a href="">ENG</a>
            </FlexWrapper>
            <Photo src={photo}/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #818181;
`

const Photo = styled.img`
    width: 944px;
    height: 387px;
    object-fit: cover;
`
const Name = styled.h2`
    font-size: 47.34px;
`
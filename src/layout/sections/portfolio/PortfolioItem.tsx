import React from "react";
import styled from "styled-components";
import progect1 from "../../../assets/images/progect_1.webp"


export const PortfolioItem = () => {
    return (
        <StyledPortfolioItem>
            <img src={progect1}/>
            <LinkToTheProgect href="">Online fashion store - Homepage</LinkToTheProgect>
        </StyledPortfolioItem>
    );
};

const StyledPortfolioItem = styled.section`
    background-color: #ff8ed9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkToTheProgect = styled.a`
    
`
import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <PortfolioItem/>
            <PortfolioItem/>
            <PortfolioItem/>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background-color: #ffcbee;
`
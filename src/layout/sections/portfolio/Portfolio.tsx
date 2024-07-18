import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { PortfolioItem } from "./portfolioItem/PortfolioItem";
import progect1 from "../../../assets/images/progect_1.webp"
import progect2 from "../../../assets/images/progect_2.webp"
import progect3 from "../../../assets/images/progect_3.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";


 const data = [
    {
        name: "Online fashion store - Homepage",
        src: progect1,
    },
    {
        name: "Reebok Store - Concept",
        src: progect2,
    },
    {
        name: "Braun Landing Page - Concept",
        src: progect3,
    }
 ]

type DataType = {
    name: string
    src: string
}

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
            {data.map((item: DataType) => {
                return (
                    <PortfolioItem coverSrc={item.src} linkName={item.name}/>
                )
            })}
            </FlexWrapper>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background-color: #ffcbee;
`
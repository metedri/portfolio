import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { PortfolioItem } from "./portfolioItem/PortfolioItem";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import {portfolioData} from "../../../data/portfolioData"
import { S } from "./Portfolio_Styles";


export const Portfolio: React.FC = () => {
    return (
        <S.Portfolio id="portfolio">
            <Container>
                <SectionTitle>Portfolio</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"} gap="100px">
                    {portfolioData.map((item, index) => {
                        return (
                            <PortfolioItem key={index} coverSrc={item.src} linkName={item.name}  />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Portfolio>
    );
};


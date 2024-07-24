import React from "react";
import styled from "styled-components";
import progect1 from "../../../../assets/images/progect_1.webp"
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";


type PortfolioItemPropsType = {
    linkName: string
    linkHref?: string
    coverSrc?: string
}

export const PortfolioItem = (props: PortfolioItemPropsType) => {
    return (
        <StyledPortfolioItem>
            <FlexWrapper direction="column" align="center">
                <ProjectCover src={props.coverSrc || progect1} />
                <LinkToTheProgect href={props.linkHref || "#"}>{props.linkName}</LinkToTheProgect>
            </FlexWrapper>
        </StyledPortfolioItem>
    );
};


const StyledPortfolioItem = styled.div`

`

const ProjectCover = styled.img`
    max-height: 510px;
    max-width: 940px;
    object-fit: cover;

    @media (max-width: 940px) {
        max-width: 100%;
    }
    @media (max-width: 480px) {
        max-width: 100%;
    }
`

const LinkToTheProgect = styled.a`
    margin: 45px 0 100px;
    color: ${theme.colors.font};
    text-decoration: underline;
    font-weight: 500;
`


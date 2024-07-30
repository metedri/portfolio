import React from "react";
import styled from "styled-components";
import progect1 from "../../../../assets/images/progect_1.webp"
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";


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
    width: 100%;
    object-fit: cover;
    margin-bottom: 45px;

    @media ${theme.media.mobile} {
        margin-bottom: 25px;
    }
`

const LinkToTheProgect = styled.a`
    text-decoration: underline;
    ${font({weight: 500, color: theme.colors.font, fmax: 16, fmin: 14})}

    
`


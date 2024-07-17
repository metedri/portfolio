import React from "react";
import styled from "styled-components";
import progect1 from "../../../../assets/images/progect_1.webp"


type PortfolioItemPropsType = {
    linkName: string
    linkHref?: string
    coverSrc?: string
}

export const PortfolioItem = (props: PortfolioItemPropsType) => {
    return (
        <StyledPortfolioItem>
            <ProjectCover src={props.coverSrc || progect1}/>
            <LinkToTheProgect href={props.linkHref || "#"}>{props.linkName}</LinkToTheProgect>
        </StyledPortfolioItem>
    );
};

const StyledPortfolioItem = styled.div`
    background-color: #ff8ed9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkToTheProgect = styled.a`
    color: black;
`

const ProjectCover = styled.img`
    max-height: 510px;
    max-width: 936.24px;
`
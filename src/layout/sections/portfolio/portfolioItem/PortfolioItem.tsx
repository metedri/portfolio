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
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 937px;
`

const LinkToTheProgect = styled.a`
    padding: 45px 0;
`

const ProjectCover = styled.img`
    height: 510px;
    width: 936.24px;
    object-fit: cover;
`
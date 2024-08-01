import React from "react";
import progect1 from "../../../../assets/images/progect_1.webp"
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Portfolio_Styles";


type PortfolioItemPropsType = {
    linkName: string
    linkHref?: string
    coverSrc?: string
}

export const PortfolioItem: React.FC<PortfolioItemPropsType> = (props) => {
    return (
        <S.PortfolioItem>
            <FlexWrapper direction="column" align="center">
                <S.ProjectCover src={props.coverSrc || progect1} />
                <S.LinkToTheProgect href={props.linkHref || "#"}>{props.linkName}</S.LinkToTheProgect>
            </FlexWrapper>
        </S.PortfolioItem>
    );
};




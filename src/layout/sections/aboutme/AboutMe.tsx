import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./AboutMe_Styles";

export const AboutMe: React.FC = () => {
    return (
        <S.StyledAboutMe id="section2">
                <SectionTitle>About me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                        <S.AboutMeDiscription>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</S.AboutMeDiscription>
                        <S.AboutMeDiscription>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</S.AboutMeDiscription>
                        <S.AboutMeDiscription>Ready to implement excellent projects  with wonderful people.</S.AboutMeDiscription>
                </FlexWrapper>
        </S.StyledAboutMe>
    );
};


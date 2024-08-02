import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./AboutMe_Styles";
import { useTranslation } from "react-i18next";

export const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return (
        <S.AboutMe id="aboutme">
                <SectionTitle>{t('aboutMe.title')}</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                        <S.AboutMeDiscription>{t('aboutMe.paragraph_one')}</S.AboutMeDiscription>
                        <S.AboutMeDiscription>{t('aboutMe.paragraph_two')}</S.AboutMeDiscription>
                        <S.AboutMeDiscription>{t('aboutMe.paragraph_three')}</S.AboutMeDiscription>
                </FlexWrapper>
        </S.AboutMe>
    );
};


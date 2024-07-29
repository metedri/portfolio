import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
                <SectionTitle>About me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                        <AboutMeDiscription>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</AboutMeDiscription>
                        <AboutMeDiscription>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</AboutMeDiscription>
                        <AboutMeDiscription>Ready to implement excellent projects  with wonderful people.</AboutMeDiscription>
                </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-bottom: 100px;
`
const AboutMeDiscription =styled.p`
    text-align: center;
    font-size: 18px;
    padding: 0 15px 1rem;
    max-width: 490px;
`
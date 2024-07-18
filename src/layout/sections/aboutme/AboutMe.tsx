import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <StyledAboutMeDiscription>
                <p>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.</p>
                <p>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</p>
                <p>Ready to implement excellent projects  with wonderful people.</p>
                </StyledAboutMeDiscription>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: #F6F6F6;
    min-height: 506px;
`
const StyledAboutMeDiscription = styled.div`
    text-align: center;
    max-width: 485.34px;
`
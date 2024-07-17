import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <span>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</span>
            <span>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</span>
            <span>Ready to implement excellent projects  with wonderful people.</span>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: #6bd4b1;
`
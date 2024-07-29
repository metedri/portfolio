import React from "react";
import styled from "styled-components";
import { Menu } from "./menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu />
                <MobileMenu/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
`
import React from "react";
import styled from "styled-components";
import { Menu } from "./menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
`
import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <Link href="#section1">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#section2">About me</Link>
                </ListItem>
                <ListItem>
                    <Link href="#section3">Skils</Link>
                </ListItem>
                <ListItem>
                    <Link href="#section4">Portfolio</Link>
                </ListItem>
                <ListItem>
                    <Link href="#section5">Contacts</Link>
                </ListItem>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    min-height: 90px;
    border-bottom: 1px solid ${theme.colors.fontLite};
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    @media ${theme.media.tablet} {
    display: none;
    }
`

const ListItem = styled.li`

`
const Link = styled.a`
    font-size: 18px;
    color: ${theme.colors.fontLite};
    font-weight: 600;

    &:hover {
        color: ${theme.colors.font};
    }
`
import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">About me</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Skils</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Portfolio</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Contacts</Link>
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
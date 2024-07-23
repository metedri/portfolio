import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <Link href="">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="">About me</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Skils</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Portfolio</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Contacts</Link>
                </ListItem>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    min-height: 88px;
    border-bottom: 1px solid ${theme.colors.fontLite};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
    ul {
        flex-direction: column;
        align-items: center; 
    }}
`

const ListItem = styled.li`

`
const Link = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: ${theme.colors.fontLite};
    font-weight: 600;

    &:hover {
        color: ${theme.colors.font};
    }
`
import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        min-height: 50px;

    }
`

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        
    `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
    }
`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen:boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const ListItem = styled.li`

`
const Link = styled.a`
    font-size: 36px;
    color: ${theme.colors.fontLite};
    font-weight: 600;

    &:hover {
        color: ${theme.colors.font};
    }
`
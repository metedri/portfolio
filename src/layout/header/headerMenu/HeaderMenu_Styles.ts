import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

// -- Menu

const Link = styled.a`
    font-size: 18px;
    color: ${theme.colors.fontLite};
    font-weight: 600;

    &:hover {
        color: ${theme.colors.font};
    }

    @media ${theme.media.mobile} {
        font-size: 24px;
    }
`
// -- Desktop Menu

const DesktopMenu = styled.nav`
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
`
// -- Mobile Menu

const MobileMenu = styled.nav`
    min-height: 50px;
`

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.8s ease-in-out;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
    }

    ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: translateY(0); 
        & ul {
            gap: 30px;
        }
    `}
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

export const S = {
    Link,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
}
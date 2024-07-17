import React from "react";
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About me</a>
                </li>
                <li>
                    <a href="">Skils</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <p>Want to know more or just chat?<br></br>You are welcome!</p>
            <StyledButton>Send message</StyledButton>
            <div>
                Icon1 Icon2 Icon3 Icon4
            </div>
            <p>Like me on<br></br>LinkedIn, Instagram, Behance, Dribble</p>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledButton = styled.button`
    width: 180.5px;
    height: 42px;
    background-color: #070707;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    font-size: 18px;
`
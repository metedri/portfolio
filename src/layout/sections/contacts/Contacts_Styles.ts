import styled from "styled-components"
import { font } from "../../../styles/Fonts"
import { theme } from "../../../styles/Theme"

const Contacts = styled.section`

`

const ContactDiscription = styled.p`
    max-width: 320px;
    padding-bottom: 30px;
    text-align: center;
    ${font({weight: 500, lineHeight: 1.4, fmax: 18, fmin: 14})}
`

const SocialList = styled.ul`
    margin: 80px 0 45px;
    display: flex;
    gap: 60px;
    justify-content: center;

    @media ${theme.media.mobile} {
        gap: 40px;
    }
`

const SocialItem = styled.li`

`

const SocialIconLink = styled.a`
position: relative;

&::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 50px;
    border-bottom: 2px solid ${theme.colors.font};
    border-radius: 10px;
    transform: translateY(-5px) translateX(-5px);
    position: absolute;
}

&:hover{
    svg {
        transform: translateY(-5px);
    }
    &::before {
        border-bottom: 5px solid ${theme.colors.font};
    }
}
`

const ContactWithMe = styled.p`
    text-align: center;
    ${font({color:theme.colors.fontLite, fmax: 14, fmin: 12})}
`

// --- Modal window

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
`;


const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    opacity: 1;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.fontLite};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;


    @media  ${theme.media.mobile} {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transform: translate(0, 0);
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border-radius: 0;
    }
`

const CloseButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
`

const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.fontLite};
    border-radius: 10px;
    padding: 7px 15px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.font};

    &::placeholder {
        text-transform: capitalize;
        color: ${theme.colors.fontLite};
    }

    
`


export const S = {
    Contacts,
    ContactDiscription,
    SocialList,
    SocialItem,
    SocialIconLink,
    ContactWithMe,
    ModalOverlay,
    Modal,
    CloseButton,
    Form,
    Field
}
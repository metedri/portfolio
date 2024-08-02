import React, { ElementRef, useRef } from "react";
import { StyledButton } from "../../../../components/StyledButton";
import {S} from "../Contacts_Styles";
import emailjs from '@emailjs/browser';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}


export const FormMessage: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    
    
    const form = useRef<ElementRef<'form'>>(null);
    
    const sendEmail = (e: any) => {
        e.preventDefault();
        if(!form.current)return
        emailjs
        .sendForm('service_05qbr7j', 'template_i6xn0yv', form.current, {
            publicKey: 'Yhakanmy4OnUA9rI4',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
        });
        e.target.reset()
        onClose()
    };

    if (!isOpen) return null;


    return (
        <S.Modal onClick={onClose}>
            <S.CloseButton onClick={onClose}>X</S.CloseButton>
            <S.Form onClick={(e) => e.stopPropagation()} ref={form} onSubmit={sendEmail}>
                <S.Field required placeholder={"name"} name={"from_name"}/>
                <S.Field required placeholder={"email"} name={"email"}/>
                <S.Field required placeholder={"subject"} name={"subject"}/>
                <S.Field required placeholder={"message"}as={"textarea"} name={"message"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>
            </S.Form>
        </S.Modal>
    )
}




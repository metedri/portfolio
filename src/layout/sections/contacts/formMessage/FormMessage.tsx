import React from "react";
import { StyledButton } from "../../../../components/StyledButton";
import {S} from "../Contacts_Styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}


export const FormMessage: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <S.Modal onClick={onClose}>
            <S.CloseButton onClick={onClose}>X</S.CloseButton>
            <S.Form onClick={(e) => e.stopPropagation()}>
                <S.Field placeholder={"name"}/>
                <S.Field placeholder={"subject"}/>
                <S.Field placeholder={"message"}as={"textarea"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>
            </S.Form>
        </S.Modal>
    )
}




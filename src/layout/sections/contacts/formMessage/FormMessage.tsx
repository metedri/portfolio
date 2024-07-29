import styled from "styled-components"
import { StyledButton } from "../../../../components/StyledButton"
import { theme } from "../../../../styles/Theme"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}


export const FormMessage: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <StyledModal onClick={onClose}>
            <CloseButton onClick={onClose}>X</CloseButton>
            <StyledForm onClick={(e) => e.stopPropagation()}>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"}as={"textarea"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>
            </StyledForm>
        </StyledModal>
    )
}


const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
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

const StyledForm = styled.form`
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


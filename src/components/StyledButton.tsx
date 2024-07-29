import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledButton = styled.button`
    width: 180px;
    height: 42px;
    border-radius: 50px;
    background-color: ${theme.colors.font};
    color: ${theme.colors.primaryBg};
    font-size: 18px;
`

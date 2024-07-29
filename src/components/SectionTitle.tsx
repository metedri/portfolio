import styled from "styled-components";
import { font } from "../styles/Common";

type SectionTitlePropsType = {
    
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({weight: 700, fmax: 34, fmin: 28})}
    text-align: center;
    margin-bottom: 45px;
`
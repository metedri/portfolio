import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
`

const Skill = styled.div`
    width: 300px;
    flex-grow: 1;
    padding: 62px 20px 40px;

    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: ${theme.colors.fontLite};
        opacity: 0.1;
        transform: rotate(45deg) translateX(-25%);
        position: absolute;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
`

const SkillText = styled.p`
    text-align: center;
    font-size: 14px;
`


export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}
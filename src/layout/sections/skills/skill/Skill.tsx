import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
    iconID: string,
    title: string,
    description: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconID={props.iconID} />
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
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


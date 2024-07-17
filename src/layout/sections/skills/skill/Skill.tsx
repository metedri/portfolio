import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconID: string,
    title: string,
    description: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconID={props.iconID}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`
import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { skill } from "../../../data/skillData";
import { S } from "./Skills_Styles";


export const Skills: React.FC = () => {
    return (
        <S.Skills id="section3">
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                {skill.map((item, index) => (
                        <Skill key={index} iconID={item.iconID} title={item.title} description={item.descriptionEng} />
                ))}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


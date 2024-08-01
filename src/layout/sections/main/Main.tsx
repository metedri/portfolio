import React from "react";
import photo from "../../../assets/images/main_foto.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <S.MainDiscription>
                    <FlexWrapper justify='space-between' align='center'>
                        <S.Name>Denis Novik</S.Name>
                        <S.MainTitle>
                            <h1>UX | UI designer</h1>
                            <span>24 years old, Minsk</span>
                        </S.MainTitle>
                        <S.LangSelection>
                            <S.ButtonLang>RU</S.ButtonLang>
                            <S.ButtonLang>ENG</S.ButtonLang>
                        </S.LangSelection>
                    </FlexWrapper>
                </S.MainDiscription>
                <S.Photo src={photo} />
            </Container>
        </S.Main>
    );
};





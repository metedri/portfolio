import React from 'react'
import photo from '../../../assets/images/main_foto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './Main_Styles'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n'

export const Main: React.FC = () => {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <S.Main id="home">
      <Container>
        <S.MainDiscription>
          <FlexWrapper justify="space-between" align="center">
            <S.Name>{t('main.name')}</S.Name>
            <S.MainTitle>
              <h1>{t('main.h1')}</h1>
              <span>{t('main.span')}</span>
            </S.MainTitle>
            <S.LangSelection>
              <S.ButtonLang onClick={() => changeLanguage('ru')}>RU</S.ButtonLang>
              <S.ButtonLang onClick={() => changeLanguage('en')}>ENG</S.ButtonLang>
            </S.LangSelection>
          </FlexWrapper>
        </S.MainDiscription>
        <S.Photo src={photo} />
      </Container>
    </S.Main>
  )
}

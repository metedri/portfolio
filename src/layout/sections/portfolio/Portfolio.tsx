import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { PortfolioItem } from './portfolioItem/PortfolioItem'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { portfolioData } from '../../../data/portfolioData'
import { S } from './Portfolio_Styles'
import { useTranslation } from 'react-i18next'

export const Portfolio: React.FC = () => {
  const { t } = useTranslation()
  return (
    <S.Portfolio id="portfolio">
      <Container>
        <SectionTitle>{t('portfolio.title')}</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'} gap="100px">
          {portfolioData.map((item, index) => {
            return <PortfolioItem key={index} coverSrc={item.src} linkName={item.title} linkHref={item.link} />
          })}
        </FlexWrapper>
      </Container>
    </S.Portfolio>
  )
}

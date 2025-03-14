import React, { useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { StyledButton } from '../../../components/StyledButton'
import { FormMessage } from './formMessage/FormMessage'
import { S } from './Contacts_Styles'
import { socials } from '../../../data/socials'
import { useTranslation } from 'react-i18next'

export const Contacts: React.FC = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Contacts id="contacts">
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>{t('contacts.title')}</SectionTitle>
          <S.ContactDiscription>{t('contacts.description')}</S.ContactDiscription>
          {isModalOpen && <FormMessage onClose={closeModal}></FormMessage>}
          <StyledButton onClick={openModal}>{t('contacts.formCallBtn')}</StyledButton>
          <S.SocialList>
            {socials.map((item, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialIconLink target="_blank" href={item.href}>
                    <Icon height={'40'} width={'40'} iconID={item.iconID} />
                  </S.SocialIconLink>
                </S.SocialItem>
              )
            })}
          </S.SocialList>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  )
}

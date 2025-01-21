import React, { ElementRef, useRef } from 'react'
import ReactDOM from 'react-dom'
import { StyledButton } from '../../../../components/StyledButton'
import { S } from '../Contacts_Styles'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

type Props = {
  onClose: () => void
}

export const FormMessage = ({ onClose }: Props) => {
  const { t } = useTranslation()
  const form = useRef<ElementRef<'form'>>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm('service_05qbr7j', 'template_i6xn0yv', form.current, {
        publicKey: 'Yhakanmy4OnUA9rI4',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )
    e.currentTarget.reset()
    onClose()
  }

  return ReactDOM.createPortal(
    <S.ModalOverlay onClick={onClose}>
      <S.Modal onClick={onClose}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.Form onClick={e => e.stopPropagation()} ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={'name'} name={'from_name'} />
          <S.Field required placeholder={'email'} name={'email'} />
          <S.Field required placeholder={'subject'} name={'subject'} />
          <S.Field required placeholder={'message'} as={'textarea'} name={'message'} />
          <StyledButton type={'submit'}>{t('contacts.sendBtn')}</StyledButton>
        </S.Form>
      </S.Modal>
    </S.ModalOverlay>,
    document.body
  )
}

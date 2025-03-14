import React from 'react'
import { MenuItemType } from '../../../../data/menuItems'
import { S } from '../HeaderMenu_Styles'
import { useTranslation } from 'react-i18next'

type MenuItemPropsType = {
  items: MenuItemType[]
}

export const Menu: React.FC<MenuItemPropsType> = props => {
  const { t } = useTranslation()
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <S.Link href={item.href}>{t(`menu.${item.key}`)}</S.Link>
        </li>
      ))}
    </ul>
  )
}

import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { MenuItemType } from "../../../../data/menuItems";
import { S } from "../HeaderMenu_Styles";



type MenuItemPropsType = {
    menuItems: MenuItemType[];
}

export const MobileMenu: React.FC<MenuItemPropsType> = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
               <Menu items={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


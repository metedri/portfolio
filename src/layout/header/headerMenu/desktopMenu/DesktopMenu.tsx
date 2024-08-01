import React from "react";
import { Menu } from "../menu/Menu";
import { MenuItemType } from "../../../../data/menuItems";
import {S} from "../HeaderMenu_Styles";


type MenuItemPropsType = {
    menuItems: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuItemPropsType> = (props) => {
    return (
        <S.DesktopMenu>
            <Menu items={props.menuItems}/>
        </S.DesktopMenu>
    );
};


import React from "react";
import { Menu } from "../menu/Menu";
import { MenuItemType } from "../../../../data/MenuItems";
import {S} from "../HeaderMenu_Styles";


type MenuItemPropsType = {
    menuItems: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuItemPropsType> = (props) => {
    return (
        <S.StyledDesktopMenu>
            <Menu items={props.menuItems}/>
        </S.StyledDesktopMenu>
    );
};


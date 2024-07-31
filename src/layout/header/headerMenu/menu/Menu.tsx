import React from "react";
import { MenuItemType } from "../../../../data/MenuItems";
import {S} from "../HeaderMenu_Styles";


type MenuItemPropsType = {
    items: MenuItemType[];
}

export const Menu: React.FC<MenuItemPropsType> = (props) => {
    return (
        <ul>
        {props.items.map((item, index) => (
            <li key={index}>
                <S.Link href={item.href}>{item.eng}</S.Link>
            </li>
        ))}
    </ul>
    );
};


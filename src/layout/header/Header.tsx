import React from "react";
import { Container } from "../../components/Container";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { items } from "../../data/menuItems";


export const Header: React.FC = () => {

    const[width, setWidth] =React.useState(window.innerWidth)
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <header>
            <Container>
                {width < breakpoint ? <MobileMenu menuItems={items} /> 
                                    : <DesktopMenu menuItems={items} />}
            </Container>
        </header>
    );
};
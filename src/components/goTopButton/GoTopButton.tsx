import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const GoTopBtn = () => {
    const [showBtn, setshowBtn] = useState(false);

    useEffect (() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {window.scrollTo({top: 0,});}}>
                    <Icon iconID={"arrowGoTop"} width={"16"} height={"15"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            
            )}
        </>

    );
};


const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.secondaryBg};
    padding: 8px;
    border-radius: 5px;

    position: fixed;
    right: 30px;
    bottom: 30px;

    /* @media ${theme.media.mobile} {
        right: 10px;
        bottom: 10px;
    } */
`
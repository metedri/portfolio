import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <p>Want to know more or just chat?<br />You are welcome!</p>
                <StyledButton>Send message</StyledButton>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink href="">
                            <Icon height={"40"} width={"40"} iconID={"linkedin"} />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink href="">
                            <Icon height={"40"} width={"40"} iconID={"telegram"} />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink href="">
                            <Icon height={"40"} width={"40"} iconID={"instagram"} />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink href="">
                            <Icon height={"40"} width={"40"} iconID={"vk"} />
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <p>Like me on<br />LinkedIn, Telegram, Instagram, VK</p>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 622px;
`

const StyledButton = styled.button`
    width: 180.5px;
    height: 42px;
    background-color: #070707;
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 18px;
`

const SocialList = styled.ul`
    margin-top: 20px;
    display: flex;
    gap: 62px;
    justify-content: center;
`

const SocialItem = styled.li`
    
`

const SocialIconLink = styled.a`
    
`
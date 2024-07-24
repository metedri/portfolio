import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>Contacts</SectionTitle>
                    <ContactDiscription>Want to know more or just chat? You are welcome!</ContactDiscription>
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
                    <ContactWithMe>Like me on<br />LinkedIn, Telegram, Instagram, VK</ContactWithMe>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`

`

const ContactDiscription = styled.p`
    max-width: 300px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
`

const StyledButton = styled.button`
    width: 180.5px;
    height: 42px;
    border-radius: 50px;
    background-color: ${theme.colors.font};
    color: ${theme.colors.primaryBg};
    font-size: 18px;
`

const SocialList = styled.ul`
    margin: 80px 0 45px;
    display: flex;
    gap: 62px;
    justify-content: center;
`

const SocialItem = styled.li`
    
`

const SocialIconLink = styled.a`
position: relative;

&::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 50px;
    border-bottom: 2px solid ${theme.colors.font};
    /* border-radius: 10px; */
    transform: translateY(-5px) translateX(-5px);
    position: absolute;
}  
`

const ContactWithMe = styled.p`
    text-align: center;
    font-size: 14px;
    color: ${theme.colors.fontLite};
`
import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { StyledButton } from "../../../components/StyledButton";
import { FormMessage } from "./formMessage/FormMessage";

export const Contacts: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <StyledContacts id="section5">
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>Contacts</SectionTitle>
                    <ContactDiscription>Want to know more or just chat? You are welcome!</ContactDiscription>
                    <FormMessage isOpen={isModalOpen} onClose={closeModal}>
                    </FormMessage>
                    <StyledButton onClick={openModal}>Send message</StyledButton>
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
    padding-bottom: 30px;
    text-align: center;
    ${font({weight: 500, lineHeight: 1.4, fmax: 18, fmin: 14})}
`

const SocialList = styled.ul`
    margin: 80px 0 45px;
    display: flex;
    gap: 60px;
    justify-content: center;

    @media ${theme.media.mobile} {
        gap: 40px;
    }
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
    border-radius: 10px;
    transform: translateY(-5px) translateX(-5px);
    position: absolute;
}  
`

const ContactWithMe = styled.p`
    text-align: center;
    ${font({color:theme.colors.fontLite, fmax: 14, fmin: 12})}
`
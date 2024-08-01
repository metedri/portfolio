import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledButton } from "../../../components/StyledButton";
import { FormMessage } from "./formMessage/FormMessage";
import { S } from "./Contacts_Styles";
import {socials} from "../../../data/socials";

export const Contacts: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <S.Contacts id="contacts">
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>Contacts</SectionTitle>
                    <S.ContactDiscription>Want to know more or just chat? You are welcome!</S.ContactDiscription>
                    <FormMessage isOpen={isModalOpen} onClose={closeModal}>
                    </FormMessage>
                    <StyledButton onClick={openModal}>Send message</StyledButton>
                    <S.SocialList>
                        {socials.map((item, index) => {
                            return(
                            <S.SocialItem key={index}>
                                <S.SocialIconLink href={item.href}>
                                    <Icon height={"40"} width={"40"} iconID={item.iconID} />
                                </S.SocialIconLink>
                            </S.SocialItem>
                        )})}
                    </S.SocialList>
                    <S.ContactWithMe>Like me on<br />LinkedIn, Telegram, Instagram, VK</S.ContactWithMe>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    )
}


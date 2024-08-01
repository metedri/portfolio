import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Fonts"

const Portfolio = styled.section`
    @media ${theme.media.mobile} {
        & > div > div {
            gap: 50px;
        }
    }
`

const PortfolioItem = styled.div`

`

const ProjectCover = styled.img`
    max-height: 510px;
    max-width: 940px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 45px;

    @media ${theme.media.mobile} {
        margin-bottom: 25px;
    }
`

const LinkToTheProgect = styled.a`
    text-decoration: underline;
    ${font({weight: 500, color: theme.colors.font, fmax: 16, fmin: 14})}

    
`


export const S = {
    Portfolio,
    PortfolioItem,
    ProjectCover,
    LinkToTheProgect
}
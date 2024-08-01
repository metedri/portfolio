import progect1 from "../assets/images/progect_1.webp"
import progect2 from "../assets/images/progect_2.webp"
import progect3 from "../assets/images/progect_3.webp"


export type PortfolioDataType = {
    name: string
    src: string
}

export const portfolioData: PortfolioDataType[] = [
    {
        name: "Online fashion store - Homepage",
        src: progect1,
    },
    {
        name: "Reebok Store - Concept",
        src: progect2,
    },
    {
        name: "Braun Landing Page - Concept",
        src: progect3,
    }
]


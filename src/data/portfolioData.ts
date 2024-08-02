import progect1 from "../assets/images/progect_1.webp"
import progect2 from "../assets/images/progect_2.webp"
import progect3 from "../assets/images/progect_3.webp"


export type PortfolioDataType = {
    key: string
    src: string
}

export const portfolioData: PortfolioDataType[] = [
    {
        key: "progectName1",
        src: progect1,
    },
    {
        key: "progectName2",
        src: progect2,
    },
    {
        key: "progectName3",
        src: progect3,
    }
]


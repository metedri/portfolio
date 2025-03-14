import progect1 from '../assets/images/progect_1.webp'

export type PortfolioDataType = {
  title: string
  src: string
  link: string
}

export const portfolioData: PortfolioDataType[] = [
  {
    title: 'Pictorial',
    src: progect1,
    link: 'https://pictorial.work',
  },
]

import progect1 from '../assets/images/progect_1.webp'
import progect2 from '../assets/images/progect_2.webp'
import progect3 from '../assets/images/progect_3.webp'

export type PortfolioDataType = {
  title: string
  src: string
  link: string
}

export const portfolioData: PortfolioDataType[] = [
  {
    title: 'Pictorial',
    src: progect1,
    link: 'https://www.google.com/',
  },
  //   {
  //     title: 'progectName2',
  //     src: progect2,
  //     link: 'https://www.google.com/',
  //   },
  //   {
  //     title: 'progectName3',
  //     src: progect3,
  //     link: 'https://www.google.com/',
  //   },
]

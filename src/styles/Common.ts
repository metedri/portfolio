import { theme } from "./Theme"

type FontPropsType = {
    weight?: number,
    color?: string,
    lineHeight?: number,
    fmin?: number,
    fmax?: number
}
export const font = ({weight, color, lineHeight, fmin, fmax}: FontPropsType) => `
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px);
`
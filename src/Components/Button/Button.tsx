import { StdAlign, StdBackgroundColors, StdFlex, StdFonts, StdJustify, StdMargin, StdPadding, StdTextColors } from '@/Styles'
import Styles from './Button.module.css'

import React from 'react'

interface ButtonProps {
    className?: string
    text: string
    type: ButtonType
    onClick: () => void
    disabled?: boolean
    loading?: boolean
}

export enum ButtonType {
    Primary,
    Secondary,
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        text,
        type,
        onClick,
        disabled = false,
        loading = false,
    } = props
    let { className = '' } = props
    let textClassName = ''

    if (type === ButtonType.Primary) {
        className += ` ${Styles.orange} ${StdBackgroundColors.Orange}`
        textClassName += ` ${StdTextColors.White} ${StdFonts.SmallTextBold}`
    } else if (type === ButtonType.Secondary) {
        className += ` ${Styles.white}`
        textClassName += ` ${StdTextColors.Black} ${StdFonts.SmallTextBold}`
    }
    return (
        <button className={`${Styles.container} ${StdFlex.Col} ${StdAlign.Center} ${StdJustify.Center} ${StdPadding.Y6} ${StdPadding.X12} ${className}`} disabled={disabled || loading} onClick={disabled || loading ? () => false : () => onClick()}>
            <p className={`${textClassName}`}>{loading ? 'Loading...' : text}</p>
        </button >
    )
}

export default Button

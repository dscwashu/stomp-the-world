export enum StdFonts {
    H1 = 'h1',
    H2 = 'h2',
    LargeText = 'largeText',
    LargeTextBold = 'largeTextBold',
    MediumText = 'mediumText',
    MediumTextBold = 'mediumTextBold',
    SmallText = 'smallText',
    SmallTextBold = 'smallTextBold',
}

export enum StdCornerRadii {
    Normal = 'cornerRadiusNormal',
    Small = 'cornerRadiusSmall',
    Medium = 'cornerRadiusMedium',
    m6 = 'cornerRadius-6',
    m12 = 'cornerRadius-12',
    m18 = 'cornerRadius-18',
    m24 = 'cornerRadius-24',
    m30 = 'cornerRadius-30',
    full = 'cornerRadius-full',
}

export enum StdTextColors {
    Green = 'greenText',
    DarkGreen = 'darkGreenText',
    LightGreen = 'lightGreenText',
    Purple = 'purpleText',
    Yellow = 'yellowText',
    Red = 'redText',
    LightRed = 'lightRedText',
    BackgroundLightGrey = 'backgroundLightGreyText',
    BackgroundGrey = 'backgroundGreyText',
    BorderGrey = 'borderGreyText',
    TextGrey = 'textGreyText',
    TextDarkGrey = 'darkGreyText',
    Black = 'blackText',
    White = 'whiteText',
}

export enum StdTextAlign {
    Center = 'standard-text-align-center',
    Right = 'standard-text-align-right',
    Left = 'standard-text-align-left',
}

export enum StdBackgroundColors {
    Green = 'greenBackground',
    LightGreen = 'lightGreenBackground',
    Purple = 'purpleBackground',
    LightPurple = 'lightPurpleBackground',
    Yellow = 'yellowBackground',
    Red = 'redBackground',
    LightRed = 'lightRedBackground',
    BackgroundLightGrey = 'backgroundLightGreyBackground',
    BackgroundGrey = 'backgroundGreyBackground',
    BorderGrey = 'borderGreyBackground',
    TextGrey = 'textGreyBackground',
    Black = 'blackBackground',
    Orange = 'orangeBackground',
}

export const Clickable = 'clickable'
export const UnClickable = 'un-clickable'

/* -------- FLEX -------- */
export enum StdFlex {
    Row = 'standard-flex-row',
    Col = 'standard-flex-col',
}

export enum StdAlign {
    Center = 'standard-align-center',
    Start = 'standard-align-start',
    End = 'standard-align-end',
}

export enum StdJustify {
    Center = 'standard-justify-center',
    Start = 'standard-justify-start',
    End = 'standard-justify-end',
    Between = 'standard-justify-between',
    Evenly = 'standard-justify-evenly',
}

/* -------- FLEX CHILDREN -------- */
export enum StdFlexChild {
    Flex0 = 'standard-flex-child-flex-0',
    Flex1 = 'standard-flex-child-flex-1',
    Flex2 = 'standard-flex-child-flex-2',
    Flex3 = 'standard-flex-child-flex-3',
    Flex4 = 'standard-flex-child-flex-4',
    Flex5 = 'standard-flex-child-flex-5',
    Flex6 = 'standard-flex-child-flex-6',
    Flex7 = 'standard-flex-child-flex-7',
    Flex8 = 'standard-flex-child-flex-8',
    Flex9 = 'standard-flex-child-flex-9',
    Flex10 = 'standard-flex-child-flex-10',

    AlignCenter = 'standard-flex-child-align-center',
    AlignStart = 'standard-flex-child-align-start',
    AlignEnd = 'standard-flex-child-align-end',
}

/* -------- WIDTH -------- */
export enum StdWidth {
    Full = 'standard-width-full',
    Screen = 'standard-width-screen',
    FitContent = 'standard-width-fit-content',
}

/* -------- HEIGHT -------- */
export enum StdHeight {
    Full = 'standard-height-full',
    Screen = 'standard-height-screen',
    FitContent = 'standard-height-fit-content',
}

/* -------- POSITION -------- */
export enum StdPosition {
    Absolute = 'standard-position-absolute',
    Relative = 'standard-position-relative',
    Fixed = 'standard-position-fixed',
}

/* -------- OVERFLOW -------- */
export enum StdOverflow {
    XHidden = 'standard-overflow-hidden-x',
    YHidden = 'standard-overflow-hidden-y',
    XAuto = 'standard-overflow-auto-x',
    YAuto = 'standard-overflow-auto-y',
    XScroll = 'standard-overflow-scroll-x',
    YScroll = 'standard-overflow-scroll-y',
    Hidden = 'standard-overflow-hidden-x standard-overflow-hidden-y',
    Auto = 'standard-overflow-auto-x standard-overflow-auto-y',
    Scroll = 'standard-overflow-scroll-x standard-overflow-scroll-y',
}

/* -------- TRANSITION -------- */
export enum StdTransition {
    All = 'standard-transition-all',
    Transform = 'standard-transition-transform',

    ScaleOnHover = 'standard-transition-transform standard-transition-scale-on-hover',
    ScaleLargeOnHover = 'standard-transition-transform standard-transition-scale-large-on-hover',
}

/* -------- PADDING -------- */
export enum StdPadding {
    T6 = 'standard-padding-T6',
    T12 = 'standard-padding-T12',
    T18 = 'standard-padding-T18',
    T24 = 'standard-padding-T24',
    T30 = 'standard-padding-T30',
    T36 = 'standard-padding-T36',
    T42 = 'standard-padding-T42',
    T48 = 'standard-padding-T48',
    T60 = 'standard-padding-T60',
    T72 = 'standard-padding-T72',
    T90 = 'standard-padding-T90',
    T120 = 'standard-padding-T120',

    R6 = 'standard-padding-R6',
    R12 = 'standard-padding-R12',
    R18 = 'standard-padding-R18',
    R24 = 'standard-padding-R24',
    R30 = 'standard-padding-R30',
    R36 = 'standard-padding-R36',
    R42 = 'standard-padding-R42',
    R48 = 'standard-padding-R48',
    R60 = 'standard-padding-R60',
    R72 = 'standard-padding-R72',
    R90 = 'standard-padding-R90',
    R120 = 'standard-padding-R120',

    B6 = 'standard-padding-B6',
    B12 = 'standard-padding-B12',
    B18 = 'standard-padding-B18',
    B24 = 'standard-padding-B24',
    B30 = 'standard-padding-B30',
    B36 = 'standard-padding-B36',
    B42 = 'standard-padding-B42',
    B48 = 'standard-padding-B48',
    B60 = 'standard-padding-B60',
    B72 = 'standard-padding-B72',
    B90 = 'standard-padding-B90',
    B120 = 'standard-padding-B120',

    L6 = 'standard-padding-L6',
    L12 = 'standard-padding-L12',
    L18 = 'standard-padding-L18',
    L24 = 'standard-padding-L24',
    L30 = 'standard-padding-L30',
    L36 = 'standard-padding-L36',
    L42 = 'standard-padding-L42',
    L48 = 'standard-padding-L48',
    L60 = 'standard-padding-L60',
    L72 = 'standard-padding-L72',
    L90 = 'standard-padding-L90',
    L120 = 'standard-padding-L120',

    X6 = 'standard-padding-R6 standard-padding-L6',
    X12 = 'standard-padding-R12 standard-padding-L12',
    X18 = 'standard-padding-R18 standard-padding-L18',
    X24 = 'standard-padding-R24 standard-padding-L24',
    X30 = 'standard-padding-R30 standard-padding-L30',
    X36 = 'standard-padding-R36 standard-padding-L36',
    X42 = 'standard-padding-R42 standard-padding-L42',
    X48 = 'standard-padding-R48 standard-padding-L48',
    X60 = 'standard-padding-R60 standard-padding-L60',
    X72 = 'standard-padding-R72 standard-padding-L72',
    X90 = 'standard-padding-R90 standard-padding-L90',
    X120 = 'standard-padding-R120 standard-padding-L120',

    Y6 = 'standard-padding-T6 standard-padding-B6',
    Y12 = 'standard-padding-T12 standard-padding-B12',
    Y18 = 'standard-padding-T18 standard-padding-B18',
    Y24 = 'standard-padding-T24 standard-padding-B24',
    Y30 = 'standard-padding-T30 standard-padding-B30',
    Y36 = 'standard-padding-T36 standard-padding-B36',
    Y42 = 'standard-padding-T42 standard-padding-B42',
    Y48 = 'standard-padding-T48 standard-padding-B48',
    Y60 = 'standard-padding-T60 standard-padding-B60',
    Y72 = 'standard-padding-T72 standard-padding-B72',
    Y90 = 'standard-padding-T90 standard-padding-B90',
    Y120 = 'standard-padding-T120 standard-padding-B120',

    All6 = 'standard-padding-T6 standard-padding-R6 standard-padding-B6 standard-padding-L6',
    All12 = 'standard-padding-T12 standard-padding-R12 standard-padding-B12 standard-padding-L12',
    All18 = 'standard-padding-T18 standard-padding-R18 standard-padding-B18 standard-padding-L18',
    All24 = 'standard-padding-T24 standard-padding-R24 standard-padding-B24 standard-padding-L24',
    All30 = 'standard-padding-T30 standard-padding-R30 standard-padding-B30 standard-padding-L30',
    All36 = 'standard-padding-T36 standard-padding-R36 standard-padding-B36 standard-padding-L36',
    All42 = 'standard-padding-T42 standard-padding-R42 standard-padding-B42 standard-padding-L42',
    All48 = 'standard-padding-T48 standard-padding-R48 standard-padding-B48 standard-padding-L48',
    All60 = 'standard-padding-T60 standard-padding-R60 standard-padding-B60 standard-padding-L60',
    All72 = 'standard-padding-T72 standard-padding-R72 standard-padding-B72 standard-padding-L72',
    All90 = 'standard-padding-T90 standard-padding-R90 standard-padding-B90 standard-padding-L90',
    All120 = 'standard-padding-T120 standard-padding-R120 standard-padding-B120 standard-padding-L120',
}

/* -------- MARGIN -------- */
export enum StdMargin {
    NormalAll = 'normalAll',
    NormalLeftRight = 'normalLeftRight',
    NormalLeft = 'normalLeft',
    NormalRight = 'normalRight',
    NormalBottom = 'normalBottom',

    TAuto = 'standard-margin-TAuto',
    T0 = 'standard-margin-T0',
    T6 = 'standard-margin-T6',
    T12 = 'standard-margin-T12',
    T18 = 'standard-margin-T18',
    T24 = 'standard-margin-T24',
    T30 = 'standard-margin-T30',
    T36 = 'standard-margin-T36',
    T42 = 'standard-margin-T42',
    T48 = 'standard-margin-T48',
    T60 = 'standard-margin-T60',
    T72 = 'standard-margin-T72',
    T90 = 'standard-margin-T90',
    T120 = 'standard-margin-T120',

    RAuto = 'standard-margin-RAuto',
    R0 = 'standard-margin-R0',
    R6 = 'standard-margin-R6',
    R12 = 'standard-margin-R12',
    R18 = 'standard-margin-R18',
    R24 = 'standard-margin-R24',
    R30 = 'standard-margin-R30',
    R36 = 'standard-margin-R36',
    R42 = 'standard-margin-R42',
    R48 = 'standard-margin-R48',
    R60 = 'standard-margin-R60',
    R72 = 'standard-margin-R72',
    R90 = 'standard-margin-R90',
    R120 = 'standard-margin-R120',

    BAuto = 'standard-margin-BAuto',
    B0 = 'standard-margin-B0',
    B6 = 'standard-margin-B6',
    B12 = 'standard-margin-B12',
    B18 = 'standard-margin-B18',
    B24 = 'standard-margin-B24',
    B30 = 'standard-margin-B30',
    B36 = 'standard-margin-B36',
    B42 = 'standard-margin-B42',
    B48 = 'standard-margin-B48',
    B60 = 'standard-margin-B60',
    B72 = 'standard-margin-B72',
    B90 = 'standard-margin-B90',
    B120 = 'standard-margin-B120',

    LAuto = 'standard-margin-LAuto',
    L0 = 'standard-margin-L0',
    L6 = 'standard-margin-L6',
    L12 = 'standard-margin-L12',
    L18 = 'standard-margin-L18',
    L24 = 'standard-margin-L24',
    L30 = 'standard-margin-L30',
    L36 = 'standard-margin-L36',
    L42 = 'standard-margin-L42',
    L48 = 'standard-margin-L48',
    L60 = 'standard-margin-L60',
    L72 = 'standard-margin-L72',
    L90 = 'standard-margin-L90',
    L120 = 'standard-margin-L120',

    XAuto = 'standard-margin-RAuto standard-margin-LAuto',
    X0 = 'standard-margin-R0 standard-margin-L0',
    X6 = 'standard-margin-R6 standard-margin-L6',
    X12 = 'standard-margin-R12 standard-margin-L12',
    X18 = 'standard-margin-R18 standard-margin-L18',
    X24 = 'standard-margin-R24 standard-margin-L24',
    X30 = 'standard-margin-R30 standard-margin-L30',
    X36 = 'standard-margin-R36 standard-margin-L36',
    X42 = 'standard-margin-R42 standard-margin-L42',
    X48 = 'standard-margin-R48 standard-margin-L48',
    X60 = 'standard-margin-R60 standard-margin-L60',
    X72 = 'standard-margin-R72 standard-margin-L72',
    X90 = 'standard-margin-R90 standard-margin-L90',
    X120 = 'standard-margin-R120 standard-margin-L120',

    YAuto = 'standard-margin-TAuto standard-margin-BAuto',
    Y0 = 'standard-margin-T0 standard-margin-B0',
    Y6 = 'standard-margin-T6 standard-margin-B6',
    Y12 = 'standard-margin-T12 standard-margin-B12',
    Y18 = 'standard-margin-T18 standard-margin-B18',
    Y24 = 'standard-margin-T24 standard-margin-B24',
    Y30 = 'standard-margin-T30 standard-margin-B30',
    Y36 = 'standard-margin-T36 standard-margin-B36',
    Y42 = 'standard-margin-T42 standard-margin-B42',
    Y48 = 'standard-margin-T48 standard-margin-B48',
    Y60 = 'standard-margin-T60 standard-margin-B60',
    Y72 = 'standard-margin-T72 standard-margin-B72',
    Y90 = 'standard-margin-T90 standard-margin-B90',
    Y120 = 'standard-margin-T120 standard-margin-B120',
}

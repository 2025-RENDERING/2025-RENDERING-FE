const palette = {
  blue: {
    light: "#E6EBF3",
    lightActive: "#B0C2D9",
    lightHover: "#D9E2ED",
    normal: "#013C91",
    normalHover: "#013578",
    normalActive: "#012F6A",
    dark: "#012C64",
    darkHover: "#012350",
    darkActive: "#001B3C",
    darker: "#00152F",
  },
  grey: {
    light: "#FFFEFE",
    lightHover: "#FEFEFD",
    lightActive: "#FDFCFC",
    normal: "#FAF6F4",
    normalHover: "#E1DDDC",
    normalActive: "#C8C5C3",
    dark: "#BCB9B7",
    darkHover: "#969492",
    darkActive: "#706F6E",
    darker: "#464443",
  },
  red: {
    light: "#FCEDE9",
    lightHover: "#FAE3DD",
    lightActive: "#F4C6B9",
    normal: "#E9471A",
    normalHover: "#C6401B",
    normalActive: "#B03918",
    dark: "#A53517",
    darkHover: "#842B12",
    darkActive: "#63200D",
    darker: "#4D190B",
    normal50: "#E9471A80",
    normal70: "#E9471AB2",
  },
} as const;

export type PaletteName = keyof typeof palette;
export type PaletteVariant<N extends PaletteName> = keyof (typeof palette)[N];

export default palette;

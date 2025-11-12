const typography = {
  Xxxl: {
    medium: {
      fontSize: "24px",
      fontWeight: 500,
    },
  },
  Xxl: {
    medium: {
      fontSize: "22px",
      fontWeight: 500,
    },
  },
  Xl: {
    semiBold: {
      fontSize: "20px",
      fontWeight: 600,
    },
  },
  L: {
    medium: {
      fontSize: "18px",
      fontWeight: 500,
    },
  },
  M: {
    bold: {
      fontSize: "16px",
      fontWeight: 700,
    },
    regular: {
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  S: {
    bold: {
      fontSize: "14px",
      fontWeight: 700,
    },
    semiBold: {
      fontSize: "14px",
      fontWeight: 600,
    },
    medium: {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
  Xs: {
    bold: {
      fontSize: "12px",
      fontWeight: 700,
    },
    medium: {
      fontSize: "12px",
      fontWeight: 500,
    },
  },
} as const;

export type TypographyScale = typeof typography;
export type TypographyKey = keyof TypographyScale;
export type TypographyVariant<K extends TypographyKey> = keyof TypographyScale[K];

export default typography;

export const COLORS = {
  primary: "#02152b",
  secondary: "#153f59",
  tertiary: "#630b01",
  quaternary: "#fa8011",
  white: "#ffffff",
  gray: "#cccccc",
  black: "#000000",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extralarge: 24,
};

export const FONTS = {
  InterBold: "InterBold",
  InterSemiBold: "InterSemiBold",
  InterMedium: "InterMedium",
  InterRegular: "InterRegular",
  InterLight: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};

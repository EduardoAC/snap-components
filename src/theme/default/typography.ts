import { TypographySchema } from "../types"; // Update path if needed

export const defaultTypography: TypographySchema = {
  fontSize: {
    heading1: "32px",
    heading2: "28px",
    heading3: "24px",
    heading4: "20px",
    heading5: "18px",
    heading6: "16px",
    subtitle1: "16px",
    subtitle2: "14px",
    body1: "16px",
    body2: "14px",
    caption: "12px",
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    heading1: "40px",
    heading2: "36px",
    heading3: "32px",
    heading4: "28px",
    heading5: "26px",
    heading6: "24px",
    subtitle1: "24px",
    subtitle2: "22px",
    body1: "24px",
    body2: "22px",
    caption: "16px",
  },
  letterSpacing: {
    normal: "0",
    tight: "-0.5px",
    wide: "0.5px",
  },
  fontFamily: {
    heading: "'SanSerif', sans-serif",
    content: "'Arial', sans-serif",
  },
};

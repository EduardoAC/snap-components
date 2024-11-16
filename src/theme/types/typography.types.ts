export type TypographyVariants =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption";

export type TypographyFontWeight = "regular" | "semibold" | "bold";
export type TypographyLineHeight = TypographyVariants;
export type TypographyLetterSpacing = "normal" | "tight" | "wide";
export type TypographyFontFamily = "heading" | "content";

export interface TypographySchema {
  fontSize: Record<TypographyVariants, string>;
  fontWeight: Record<TypographyFontWeight, number>;
  lineHeight: Record<TypographyLineHeight, string>;
  letterSpacing: Record<TypographyLetterSpacing, string>;
  fontFamily: Record<TypographyFontFamily, string>;
}

export interface Typography {
  fontSize?: TypographyVariants;
  fontWeight?: TypographyFontWeight;
  lineHeight?: TypographyLineHeight;
  letterSpacing?: TypographyLetterSpacing;
  fontFamily?: TypographyFontFamily;
}

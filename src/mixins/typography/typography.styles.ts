import { Typography, TypographySchema } from "../../theme/types";

function objectEntries<T extends Record<string, any>>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

export function getTypographyStyles(
  typographyDefinition: Partial<Typography>,
  typographySchema: TypographySchema
) {
  const fontStyles: Partial<Record<keyof TypographySchema, string | number>> =
    {};

  // We extract the style value from the typography schema
  // Example: { fontSize: "heading1" } => { fontSize: "32px" }
  objectEntries<Typography>(typographyDefinition).forEach(
    ([fontProperty, typeValue]) => {
      if (typeValue) {
        const fontValue = typographySchema[fontProperty];
        fontStyles[fontProperty] =
          fontValue[typeValue as keyof typeof fontValue];
      }
    }
  );
  return fontStyles;
}

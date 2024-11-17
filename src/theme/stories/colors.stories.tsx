// stories/Colors.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "styled-components";

const meta: Meta = {
  title: "Theme/Colors",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    return (
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "lightGray",
          padding: "32px",
        }}
      >
        {Object.entries(theme.colors).map(([color, colorHex]) => {
          if (typeof colorHex === "string") {
            return (
              <div
                key={color}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h4>{color}</h4>
                <div
                  style={{
                    background: colorHex as string,
                    width: "50px",
                    height: "50px",
                    padding: theme.spacing.sm,
                    color: theme.colors.darken(colorHex, 2),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {colorHex}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "styled-components";
import { Spacing } from "../types";

const meta: Meta = {
  title: "Theme/Spacing",
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const theme = useTheme();
    const spacing = theme?.spacing;
    if (!spacing) {
      return <p>Failing loading spacing theme</p>;
    }
    return (
      <div>
        {Object.keys(theme.spacing).map((key) => (
          <div
            style={{
              marginBottom: spacing[key as Spacing],
              background: "lightgray",
              padding: "8px",
            }}
          >
            {key}: {spacing[key as Spacing]}
          </div>
        ))}
      </div>
    );
  },
};
